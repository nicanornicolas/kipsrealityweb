var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var fraud_detection_service_exports = {};
__export(fraud_detection_service_exports, {
  FraudDetectionService: () => FraudDetectionService,
  checkForFraud: () => checkForFraud,
  fraudDetectionService: () => fraudDetectionService
});
module.exports = __toCommonJS(fraud_detection_service_exports);
var import_payment_error_handler = require("./payment-error-handler");
class FraudDetectionService {
  rules = [];
  constructor() {
    this.initializeDefaultRules();
  }
  /**
   * Initialize default fraud detection rules
   */
  initializeDefaultRules() {
    this.rules = [
      {
        name: "AMOUNT_THRESHOLD",
        description: "Check if transaction amount exceeds typical limits",
        check: this.checkAmountThreshold.bind(this),
        severity: "MEDIUM",
        enabled: true
      },
      {
        name: "RAPID_SUCCESSIVE_TRANSACTIONS",
        description: "Detect multiple transactions in short time period",
        check: this.checkRapidTransactions.bind(this),
        severity: "HIGH",
        enabled: true
      },
      {
        name: "UNUSUAL_TIME",
        description: "Check if transaction occurs at unusual hours",
        check: this.checkUnusualTime.bind(this),
        severity: "LOW",
        enabled: true
      },
      {
        name: "EMAIL_DOMAIN_VALIDATION",
        description: "Validate email domain for suspicious patterns",
        check: this.checkEmailDomain.bind(this),
        severity: "LOW",
        enabled: true
      },
      {
        name: "IP_GEO_LOCATION",
        description: "Check if IP location matches user profile region",
        check: this.checkIpLocation.bind(this),
        severity: "MEDIUM",
        enabled: false
        // Requires IP geolocation service
      },
      {
        name: "DEVICE_FINGERPRINT",
        description: "Check for unusual device patterns",
        check: this.checkDeviceFingerprint.bind(this),
        severity: "MEDIUM",
        enabled: false
        // Requires device fingerprinting
      },
      {
        name: "CURRENCY_MISMATCH",
        description: "Check if currency matches user/organization region",
        check: this.checkCurrencyMismatch.bind(this),
        severity: "LOW",
        enabled: true
      },
      {
        name: "AVS_CHECK",
        description: "Address Verification System check (if applicable)",
        check: this.checkAvs.bind(this),
        severity: "HIGH",
        enabled: false
        // Requires AVS integration
      },
      {
        name: "BLACKLIST_CHECK",
        description: "Check against known fraudster lists",
        check: this.checkBlacklist.bind(this),
        severity: "CRITICAL",
        enabled: false
        // Requires blacklist database
      }
    ];
  }
  /**
   * Check payment request for fraud indicators
   */
  async checkPayment(request, context) {
    const results = [];
    let totalScore = 0;
    let rulesChecked = 0;
    let rulesFailed = 0;
    for (const rule of this.rules) {
      if (!rule.enabled) continue;
      rulesChecked++;
      try {
        const result = await rule.check(request, context);
        results.push(result);
        if (!result.passed) {
          rulesFailed++;
          totalScore += result.score * this.getSeverityMultiplier(rule.severity);
        }
      } catch (error) {
        console.warn(`Fraud rule ${rule.name} execution failed:`, error);
      }
    }
    const overallScore = Math.min(100, totalScore);
    const recommendation = this.getRecommendation(overallScore, rulesFailed);
    return {
      transactionId: request.invoiceId,
      overallScore,
      passed: recommendation === "ALLOW",
      rulesChecked,
      rulesFailed,
      results,
      timestamp: /* @__PURE__ */ new Date(),
      recommendation
    };
  }
  /**
   * Get recommendation based on fraud score
   */
  getRecommendation(score, rulesFailed) {
    if (rulesFailed === 0) return "ALLOW";
    if (score >= 80) return "BLOCK";
    if (score >= 50) return "REVIEW";
    return "ALLOW";
  }
  /**
   * Get severity multiplier for score calculation
   */
  getSeverityMultiplier(severity) {
    switch (severity) {
      case "LOW":
        return 0.5;
      case "MEDIUM":
        return 1;
      case "HIGH":
        return 2;
      case "CRITICAL":
        return 5;
    }
  }
  /**
   * Rule: Check if transaction amount exceeds typical limits
   */
  async checkAmountThreshold(request, context) {
    const typicalMaxAmount = 5e5;
    const amount = request.amount;
    const currency = request.currency;
    let passed = true;
    let score = 0;
    let message = `Amount ${amount} ${currency} is within typical limits`;
    if (amount > typicalMaxAmount) {
      passed = false;
      score = 70;
      message = `Amount ${amount} ${currency} exceeds typical maximum (${typicalMaxAmount} ${currency})`;
    } else if (amount > typicalMaxAmount * 0.8) {
      passed = false;
      score = 40;
      message = `Amount ${amount} ${currency} is approaching typical maximum`;
    }
    if (amount < 10) {
      passed = false;
      score = Math.max(score, 30);
      message = `Small transaction amount ${amount} ${currency} detected`;
    }
    return {
      passed,
      ruleName: "AMOUNT_THRESHOLD",
      severity: "MEDIUM",
      message,
      details: { amount, currency, typicalMaxAmount },
      score
    };
  }
  /**
   * Rule: Detect multiple transactions in short time period
   */
  async checkRapidTransactions(request, context) {
    const recentTransactions = context.previousTransactions.filter((tx) => {
      const timeDiff = Date.now() - tx.timestamp.getTime();
      return timeDiff < 5 * 60 * 1e3;
    });
    const passed = recentTransactions.length < 3;
    const score = Math.min(100, recentTransactions.length * 25);
    return {
      passed,
      ruleName: "RAPID_SUCCESSIVE_TRANSACTIONS",
      severity: "HIGH",
      message: passed ? `User has ${recentTransactions.length} recent transactions (acceptable)` : `User has ${recentTransactions.length} recent transactions in last 5 minutes (suspicious)`,
      details: {
        recentTransactionCount: recentTransactions.length,
        timeWindow: "5 minutes",
        transactionIds: recentTransactions.map((tx) => tx.id)
      },
      score
    };
  }
  /**
   * Rule: Check if transaction occurs at unusual hours
   */
  async checkUnusualTime(request, context) {
    const now = /* @__PURE__ */ new Date();
    const hour = now.getHours();
    const isUnusualHour = hour < 8 || hour > 20;
    let passed = !isUnusualHour;
    let score = 0;
    let message = `Transaction time ${hour}:00 is within normal hours`;
    if (isUnusualHour) {
      passed = false;
      score = 30;
      message = `Transaction time ${hour}:00 is outside normal business hours (8 AM - 8 PM)`;
    }
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    if (isWeekend) {
      passed = false;
      score = Math.max(score, 20);
      message = `${message} and occurs on a weekend`;
    }
    return {
      passed,
      ruleName: "UNUSUAL_TIME",
      severity: "LOW",
      message,
      details: { hour, isWeekend, timestamp: now.toISOString() },
      score
    };
  }
  /**
   * Rule: Validate email domain for suspicious patterns
   */
  async checkEmailDomain(request, context) {
    const email = request.user.email.toLowerCase();
    const domain = email.split("@")[1] || "";
    const suspiciousDomains = [
      "tempmail.com",
      "guerrillamail.com",
      "mailinator.com",
      "10minutemail.com",
      "yopmail.com",
      "trashmail.com",
      "dispostable.com",
      "fakeinbox.com",
      "throwawaymail.com",
      "temp-mail.org"
    ];
    const freeDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "protonmail.com",
      "zoho.com",
      "mail.com",
      "yandex.com"
    ];
    let passed = true;
    let score = 0;
    let message = `Email domain ${domain} appears legitimate`;
    if (suspiciousDomains.includes(domain)) {
      passed = false;
      score = 80;
      message = `Email domain ${domain} is associated with disposable/temporary email services`;
    } else if (freeDomains.includes(domain)) {
      passed = false;
      score = 20;
      message = `Email domain ${domain} is a free/public email service`;
    }
    const suspiciousPatterns = [
      /^\d+@/,
      // Email starts with numbers
      /test/,
      // Contains "test"
      /fake/,
      // Contains "fake"
      /temp/
      // Contains "temp"
    ];
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(email)) {
        passed = false;
        score = Math.max(score, 40);
        message = `Email contains suspicious pattern: ${pattern}`;
        break;
      }
    }
    return {
      passed,
      ruleName: "EMAIL_DOMAIN_VALIDATION",
      severity: "LOW",
      message,
      details: { email, domain, isSuspiciousDomain: suspiciousDomains.includes(domain) },
      score
    };
  }
  /**
   * Rule: Check if IP location matches user profile region
   */
  async checkIpLocation(request, context) {
    return {
      passed: true,
      ruleName: "IP_GEO_LOCATION",
      severity: "MEDIUM",
      message: "IP geolocation check not enabled",
      details: { note: "Requires IP geolocation service integration" },
      score: 0
    };
  }
  /**
   * Rule: Check for unusual device patterns
   */
  async checkDeviceFingerprint(request, context) {
    return {
      passed: true,
      ruleName: "DEVICE_FINGERPRINT",
      severity: "MEDIUM",
      message: "Device fingerprint check not enabled",
      details: { note: "Requires device fingerprinting integration" },
      score: 0
    };
  }
  /**
   * Rule: Check if currency matches user/organization region
   */
  async checkCurrencyMismatch(request, context) {
    const userRegion = request.user.region;
    const organizationRegion = request.organization.region;
    const transactionCurrency = request.currency;
    const expectedCurrencies = {
      "KEN": "KES",
      "USA": "USD",
      "GBR": "GBP",
      "EUR": "EUR"
    };
    const orgRegionKey = organizationRegion || "";
    const userRegionKey = userRegion || "";
    const expectedCurrency = expectedCurrencies[orgRegionKey] || expectedCurrencies[userRegionKey] || "KES";
    const passed = transactionCurrency === expectedCurrency;
    const score = passed ? 0 : 40;
    return {
      passed,
      ruleName: "CURRENCY_MISMATCH",
      severity: "LOW",
      message: passed ? `Currency ${transactionCurrency} matches expected currency for region` : `Currency ${transactionCurrency} does not match expected currency ${expectedCurrency} for region ${organizationRegion || userRegion || "unknown"}`,
      details: {
        userRegion,
        organizationRegion,
        transactionCurrency,
        expectedCurrency
      },
      score
    };
  }
  /**
   * Rule: Address Verification System check
   */
  async checkAvs(request, context) {
    return {
      passed: true,
      ruleName: "AVS_CHECK",
      severity: "HIGH",
      message: "AVS check not enabled",
      details: { note: "Requires AVS integration with payment gateway" },
      score: 0
    };
  }
  /**
   * Rule: Check against known fraudster lists
   */
  async checkBlacklist(request, context) {
    return {
      passed: true,
      ruleName: "BLACKLIST_CHECK",
      severity: "CRITICAL",
      message: "Blacklist check not enabled",
      details: { note: "Requires blacklist database integration" },
      score: 0
    };
  }
  /**
   * Enable/disable specific rule
   */
  setRuleEnabled(ruleName, enabled) {
    const rule = this.rules.find((r) => r.name === ruleName);
    if (rule) {
      rule.enabled = enabled;
    }
  }
  /**
   * Get all rules with their current status
   */
  getRules() {
    return [...this.rules];
  }
  /**
   * Add custom rule
   */
  addRule(rule) {
    this.rules.push(rule);
  }
  /**
   * Remove rule by name
   */
  removeRule(ruleName) {
    this.rules = this.rules.filter((r) => r.name !== ruleName);
  }
}
const fraudDetectionService = new FraudDetectionService();
async function checkForFraud(paymentRequest, context) {
  const defaultContext = {
    userId: paymentRequest.user.id,
    userEmail: paymentRequest.user.email,
    previousTransactions: [],
    organizationId: paymentRequest.organization.id,
    timestamp: /* @__PURE__ */ new Date(),
    ...context
  };
  const report = await fraudDetectionService.checkPayment(paymentRequest, defaultContext);
  console.log("Fraud Detection Report:", {
    transactionId: report.transactionId,
    overallScore: report.overallScore,
    recommendation: report.recommendation,
    rulesChecked: report.rulesChecked,
    rulesFailed: report.rulesFailed
  });
  switch (report.recommendation) {
    case "BLOCK":
      throw import_payment_error_handler.PaymentError.createFraudError(
        `Transaction blocked by fraud detection: overall score ${report.overallScore}`,
        report
      );
    case "REVIEW":
      console.warn("Transaction flagged for manual review:", {
        transactionId: report.transactionId,
        score: report.overallScore,
        failedRules: report.results.filter((r) => !r.passed).map((r) => r.ruleName)
      });
      break;
    case "ALLOW":
      break;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FraudDetectionService,
  checkForFraud,
  fraudDetectionService
});
