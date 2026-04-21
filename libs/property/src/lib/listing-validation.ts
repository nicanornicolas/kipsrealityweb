/**
 * Listing validation service
 * Provides input validation and rate limiting helpers for listing operations
 */

import { UserRole } from "./listing-auth.types";
import { ListingLogger } from "./listing-logger";
import { getRateLimit, VALIDATION_RULES } from "./listing-security-config";

interface ValidationInput {
  userId: string;
  userRole: UserRole;
  operation: string;
  data: any;
  unitIds?: string[];
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: any;
}

interface RateLimitState {
  count: number;
  resetTime: number;
}

export class ListingValidationService {
  private static instance: ListingValidationService;
  private logger: ListingLogger;
  private rateLimitStore = new Map<string, RateLimitState>();

  private constructor() {
    this.logger = ListingLogger.getInstance();
  }

  public static getInstance(): ListingValidationService {
    if (!ListingValidationService.instance) {
      ListingValidationService.instance = new ListingValidationService();
    }
    return ListingValidationService.instance;
  }

  /**
   * Simple in-memory rate limit check per user + operation
   */
  public checkRateLimit(userId: string, operation: string): {
    allowed: boolean;
    resetTime?: number;
  } {
    const config = getRateLimit(operation);
    if (!config) {
      return { allowed: true };
    }

    const now = Date.now();
    const key = `${userId}:${operation}`;
    const entry = this.rateLimitStore.get(key);

    if (!entry || now > entry.resetTime) {
      this.rateLimitStore.set(key, {
        count: 1,
        resetTime: now + config.windowMs
      });
      return { allowed: true, resetTime: now + config.windowMs };
    }

    if (entry.count >= config.maxRequests) {
      return { allowed: false, resetTime: entry.resetTime };
    }

    entry.count += 1;
    this.rateLimitStore.set(key, entry);
    return { allowed: true, resetTime: entry.resetTime };
  }

  /**
   * Validate and sanitize listing operations
   */
  public async validateListingOperation(input: ValidationInput): Promise<ValidationResult> {
    const errors: string[] = [];
    const data = input.data || {};
    const sanitizedData = { ...data };

    const isCreate = input.operation.includes("create");
    const isUpdate = input.operation.includes("update");
    const isStatus = input.operation.includes("status");
    const isBulk = input.operation.includes("bulk");

    if (isBulk) {
      const requiredFields = VALIDATION_RULES.bulk.requiredFields;
      requiredFields.forEach((field) => {
        if (!(field in data)) {
          errors.push(`Missing required field: ${field}`);
        }
      });

      if (Array.isArray(data.unitIds)) {
        if (data.unitIds.length === 0) {
          errors.push("unitIds must include at least one unit");
        }
        if (data.unitIds.length > VALIDATION_RULES.bulk.maxUnits) {
          errors.push(`unitIds cannot exceed ${VALIDATION_RULES.bulk.maxUnits}`);
        }
      } else if (data.unitIds !== undefined) {
        errors.push("unitIds must be an array");
      }

      if (data.action && !VALIDATION_RULES.bulk.allowedActions.includes(data.action)) {
        errors.push("Invalid bulk action");
      }
    }

    if (isCreate || isUpdate || isStatus) {
      const rules = VALIDATION_RULES.listing;

      if (isCreate || ("title" in data)) {
        const title = typeof data.title === "string" ? data.title.trim() : "";
        if (rules.title.required && !title) {
          errors.push("Title is required");
        }
        if (title && (title.length < rules.title.minLength || title.length > rules.title.maxLength)) {
          errors.push(`Title must be between ${rules.title.minLength} and ${rules.title.maxLength} characters`);
        }
        sanitizedData.title = title;
      }

      if (isCreate || ("description" in data)) {
        const description = typeof data.description === "string" ? data.description.trim() : "";
        if (rules.description.required && !description) {
          errors.push("Description is required");
        }
        if (description && (description.length < rules.description.minLength || description.length > rules.description.maxLength)) {
          errors.push(`Description must be between ${rules.description.minLength} and ${rules.description.maxLength} characters`);
        }
        sanitizedData.description = description;
      }

      if (isCreate || ("price" in data)) {
        const price = typeof data.price === "number" ? data.price : Number(data.price);
        if (Number.isNaN(price)) {
          errors.push("Price must be a number");
        } else {
          if (price < rules.price.min || price > rules.price.max) {
            errors.push(`Price must be between ${rules.price.min} and ${rules.price.max}`);
          }
          sanitizedData.price = price;
        }
      }

      if (data.availabilityDate) {
        const availabilityDate = new Date(data.availabilityDate);
        if (Number.isNaN(availabilityDate.getTime())) {
          errors.push("availabilityDate is invalid");
        } else {
          sanitizedData.availabilityDate = availabilityDate;
        }
      }

      if (data.expirationDate) {
        const expirationDate = new Date(data.expirationDate);
        if (Number.isNaN(expirationDate.getTime())) {
          errors.push("expirationDate is invalid");
        } else {
          sanitizedData.expirationDate = expirationDate;
        }
      }
    }

    if (!input.unitIds || input.unitIds.length === 0) {
      if (isCreate || isUpdate || isStatus) {
        errors.push("At least one unitId is required");
      }
    }

    const isValid = errors.length === 0;

    this.logger.logValidation(input.operation, isValid, errors, {
      userId: input.userId,
      userRole: input.userRole
    });

    return {
      isValid,
      errors,
      sanitizedData: isValid ? sanitizedData : undefined
    };
  }
}
