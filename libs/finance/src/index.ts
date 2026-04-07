// libs/finance/src/index.ts

/**
 * IFinanceModule - The facade interface that other modules use to interact
 * with the Finance bounded context.
 * 
 * This follows the Dependency Inversion Principle: @rentflow/utilities
 * depends on this abstraction, not on a concrete Finance implementation.
 */
export interface IFinanceModule {
  /**
   * Posts an invoice to the General Ledger.
   * This is called when a utility bill is approved and needs to generate
   * tenant invoices.
   */
  postInvoiceToGL(params: {
    tenantId: string;
    amount: number;
    type: string; // e.g., 'UTILITY', 'RENT', 'LATE_FEE'
    referenceId: string; // The UtilityAllocation ID
    description: string;
  }): Promise<{ invoiceId: string }>;
}

export * from './lib/finance';
export * from './lib/journal-service';
export * from './lib/actions';
export * from './lib/types';
export * from './lib/utility-service';
export * from './lib/maintenance-service';
export * from './lib/setup';
