// src/lib/mail-service.tsx
import { sendEmail } from "./mail";
import { APP_NAME, getBaseUrl, SUPPORT_EMAIL } from "./constants";

/**
 * 1. Password Reset Wrapper
 */
export const sendPasswordResetEmail = async (email: string, token: string) => {
    // Dynamic URL based on environment
    const resetUrl = `${getBaseUrl()}/reset-password?token=${token}`;

    const emailBody = (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
            <h1>Reset your password for {APP_NAME}</h1>
            <p>Someone requested a password reset for your account.</p>
            <p>Click the link below to reset it. This link expires in 1 hour.</p>
            <a
                href={resetUrl}
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    marginTop: '10px'
                }}
            >
                Reset Password
            </a>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
                If you did not request this, please ignore this email.
            </p>
        </div>
    );

    await sendEmail({
        to: email,
        subject: `Reset your ${APP_NAME} password`,
        react: emailBody,
    });
};

/**
 * 2. Verification Wrapper
 */
export const sendVerificationEmail = async (email: string, token: string) => {
    // 1. Get the Base URL dynamically
    const baseUrl = getBaseUrl();

    // 2. Construct the full link
    const verifyUrl = `${baseUrl}/api/auth/verify-email?token=${token}`;

    // 🔍 DEBUG LOG: Check this in your VS Code terminal when you sign up
    console.log("-------------------------------------------------------");
    console.log("🔗 GENERATED VERIFICATION LINK:", verifyUrl);
    console.log("-------------------------------------------------------");

    const emailBody = (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
            <h1>Welcome to {APP_NAME}!</h1>
            <p>Thank you for signing up. Please verify your email address to activate your account.</p>
            <a
                href={verifyUrl}
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    marginTop: '10px'
                }}
            >
                Verify Email
            </a>
        </div>
    );

    await sendEmail({
        to: email,
        subject: `Welcome to ${APP_NAME} - Verify your email`,
        react: emailBody,
    });
};

/**
 * 3. Tenant Application Notification to Property Manager
 */
export const sendTenantApplicationNotification = async (
    managerEmail: string,
    managerName: string,
    applicantName: string,
    applicantEmail: string,
    applicantPhone: string,
    propertyName: string,
    unitNumber: string,
    moveInDate: Date,
    leaseType: string
) => {
    const moveInDateStr = moveInDate.toLocaleDateString();
    const dashboardUrl = `${getBaseUrl()}/property-manager/content/tenants`;

    const emailBody = (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
            <h1>New Tenant Application Received</h1>
            <p>Hello {managerName},</p>
            <p>A new tenant application has been submitted for your property.</p>
            
            <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', margin: '15px 0' }}>
                <h3 style={{ marginTop: 0 }}>Application Details:</h3>
                <p><strong>Applicant:</strong> {applicantName}</p>
                <p><strong>Email:</strong> {applicantEmail}</p>
                <p><strong>Phone:</strong> {applicantPhone}</p>
                <p><strong>Property:</strong> {propertyName}</p>
                <p><strong>Unit:</strong> {unitNumber}</p>
                <p><strong>Desired Move-in Date:</strong> {moveInDateStr}</p>
                <p><strong>Lease Type:</strong> {leaseType}</p>
            </div>
            
            <p>
                <a 
                    href={dashboardUrl}
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#003b73',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        marginTop: '10px'
                    }}
                >
                    Review Application
                </a>
            </p>
            
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
                This is an automated notification from {APP_NAME}.
            </p>
        </div>
    );

    await sendEmail({
        to: managerEmail,
        subject: `New Tenant Application for ${propertyName} - ${APP_NAME}`,
        react: emailBody,
    });
};

/**
 * 4. Application Confirmation to Applicant
 */
export const sendApplicationConfirmation = async (
    applicantEmail: string,
    applicantName: string,
    propertyName: string,
    unitNumber: string
) => {
    const emailBody = (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
            <h1>Application Submitted Successfully</h1>
            <p>Hello {applicantName},</p>
            <p>Thank you for submitting your application for {propertyName}, Unit {unitNumber}.</p>
            
            <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', margin: '15px 0' }}>
                <h3 style={{ marginTop: 0 }}>Application Status:</h3>
                <p><strong>Status:</strong> Under Review</p>
                <p><strong>Property:</strong> {propertyName}</p>
                <p><strong>Unit:</strong> {unitNumber}</p>
                <p><strong>Submitted:</strong> {new Date().toLocaleDateString()}</p>
            </div>
            
            <p>Our property management team will review your application and contact you within 2-3 business days.</p>
            
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
                This is an automated confirmation from {APP_NAME}.
            </p>
        </div>
    );

    await sendEmail({
        to: applicantEmail,
        subject: `Application Confirmation for ${propertyName} - ${APP_NAME}`,
        react: emailBody,
    });
};

/**
 * 5. Tenant Invite Email for Lease Signing
 */
export const sendTenantInviteEmail = async (
    tenantEmail: string,
    tenantName: string,
    propertyName: string,
    unitNumber: string,
    landlordName: string,
    inviteLink: string,
    hasLandlordSigned: boolean
) => {
    const baseUrl = getBaseUrl();
    
    const emailBody = (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333', maxWidth: '600px' }}>
            <h1 style={{ color: '#003b73' }}>Welcome to {APP_NAME}!</h1>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #003b73' }}>
                <h2 style={{ marginTop: 0, color: '#003b73' }}>Lease Signing Invitation</h2>
                
                <p>Hello {tenantName},</p>
                
                <p>You have been invited to sign a lease for:</p>
                
                <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '6px', margin: '15px 0', border: '1px solid #dee2e6' }}>
                    <h3 style={{ marginTop: 0 }}>Property Details:</h3>
                    <p><strong>Property:</strong> {propertyName}</p>
                    <p><strong>Unit:</strong> {unitNumber}</p>
                    <p><strong>Landlord/Manager:</strong> {landlordName}</p>
                    <p><strong>Invitation Status:</strong> {hasLandlordSigned ? "Landlord has already signed ✓" : "Awaiting landlord signature"}</p>
                </div>
                
                <p>
                    <strong>Next Steps:</strong>
                    <ol style={{ marginTop: '10px' }}>
                        <li>Click the link below to review and sign the lease</li>
                        <li>Create your account using the same email address</li>
                        <li>Once signed, you&#39;ll be able to access your tenant dashboard</li>
                    </ol>
                </p>
                
                <div style={{ textAlign: 'center', margin: '25px 0' }}>
                    <a
                        href={inviteLink}
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            backgroundColor: '#003b73',
                            color: '#ffffff',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        {hasLandlordSigned ? "Sign Your Lease Now" : "Review Lease Agreement"}
                    </a>
                </div>
                
                <p style={{ fontSize: '14px', color: '#666' }}>
                    <strong>Important:</strong> This invitation link will expire in 7 days.
                </p>
            </div>
            
            <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #dee2e6', fontSize: '14px', color: '#666' }}>
                <p><strong>Need help?</strong></p>
                <p>If you have any questions about the lease or need assistance, please contact:</p>
                <p><strong>{landlordName}</strong> or our support team at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
            </div>
            
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
                This is an automated invitation from {APP_NAME}. Please do not reply to this email.
            </p>
        </div>
    );

    const subject = hasLandlordSigned 
        ? `Action Required: Sign Your Lease for ${propertyName}, Unit ${unitNumber}`
        : `Lease Invitation: ${propertyName}, Unit ${unitNumber} - ${APP_NAME}`;

    await sendEmail({
        to: tenantEmail,
        subject,
        react: emailBody,
    });
};