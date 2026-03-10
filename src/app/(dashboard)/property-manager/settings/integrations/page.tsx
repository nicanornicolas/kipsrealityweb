"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plug, 
  CreditCard, 
  Mail, 
  MessageSquare, 
  Zap, 
  CheckCircle, 
  XCircle,
  ExternalLink,
  Settings
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "connected" | "disconnected";
  category: string;
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch integrations from API
    const fetchIntegrations = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // In a real implementation, you'd have an API endpoint for integrations
        // For now, we'll use the existing API endpoints to check status
        const [stripeRes, plaidRes] = await Promise.all([
          fetch('/api/payments').catch(() => ({ ok: false })),
          fetch('/api/plaid/create-link-token').catch(() => ({ ok: false }))
        ]);
        
        const integrationData: Integration[] = [
          {
            id: "stripe",
            name: "Stripe",
            description: "Payment processing for rent collection and invoices",
            icon: "CreditCard",
            status: stripeRes.ok ? "connected" : "disconnected",
            category: "Payments"
          },
          {
            id: "plaid",
            name: "Plaid",
            description: "Bank account verification and ACH payments",
            icon: "Zap",
            status: plaidRes.ok ? "connected" : "disconnected",
            category: "Payments"
          },
          {
            id: "email",
            name: "Email Service",
            description: "Send automated emails to tenants",
            icon: "Mail",
            status: "disconnected",
            category: "Communication"
          },
          {
            id: "sms",
            name: "SMS Notifications",
            description: "Send SMS alerts for payments and maintenance",
            icon: "MessageSquare",
            status: "disconnected",
            category: "Communication"
          },
          {
            id: "dss",
            name: "Digital Signature (DSS)",
            description: "Electronic document signing for leases",
            icon: "Plug",
            status: "disconnected",
            category: "Documents"
          }
        ];
        
        setIntegrations(integrationData);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load integrations');
      } finally {
        setLoading(false);
      }
    };
    
    fetchIntegrations();
  }, []);

  const handleConnect = (integrationId: string) => {
    // In a real implementation, this would initiate OAuth flow or API key entry
    setIntegrations(prev => 
      prev.map(i => 
        i.id === integrationId 
          ? { ...i, status: "connected" as const }
          : i
      )
    );
  };

  const handleDisconnect = (integrationId: string) => {
    setIntegrations(prev => 
      prev.map(i => 
        i.id === integrationId 
          ? { ...i, status: "disconnected" as const }
          : i
      )
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CreditCard": return <CreditCard className="h-6 w-6" />;
      case "Zap": return <Zap className="h-6 w-6" />;
      case "Mail": return <Mail className="h-6 w-6" />;
      case "MessageSquare": return <MessageSquare className="h-6 w-6" />;
      default: return <Plug className="h-6 w-6" />;
    }
  };

  const connectedCount = integrations.filter(i => i.status === "connected").length;

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Integrations</h1>
          <p className="text-gray-500 mt-1">
            Connect third-party services to enhance your property management workflow.
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          {connectedCount} of {integrations.length} connected
        </Badge>
      </div>

      <div className="grid gap-6">
        {/* Payment Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Processing
            </CardTitle>
            <CardDescription>
              Manage payment gateways and financial integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y4">
            {integrations
              .filter(i => i.category === "Payments")
              .map(integration => (
                <div 
                  key={integration.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      {getIcon(integration.icon)}
                    </div>
                    <div>
                      <h4 className="font-medium">{integration.name}</h4>
                      <p className="text-sm text-gray-500">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {integration.status === "connected" ? (
                      <>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                        <Button variant="outline" size="sm" onClick={() => handleDisconnect(integration.id)}>
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <>
                        <Badge variant="outline">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Connected
                        </Badge>
                        <Button size="sm" onClick={() => handleConnect(integration.id)}>
                          Connect
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Communication Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Communication
            </CardTitle>
            <CardDescription>
              Email, SMS, and notification services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y4">
            {integrations
              .filter(i => i.category === "Communication")
              .map(integration => (
                <div 
                  key={integration.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                      {getIcon(integration.icon)}
                    </div>
                    <div>
                      <h4 className="font-medium">{integration.name}</h4>
                      <p className="text-sm text-gray-500">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {integration.status === "connected" ? (
                      <>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                        <Button variant="outline" size="sm" onClick={() => handleDisconnect(integration.id)}>
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <>
                        <Badge variant="outline">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Connected
                        </Badge>
                        <Button size="sm" onClick={() => handleConnect(integration.id)}>
                          Connect
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        {/* Document Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plug className="h-5 w-5" />
              Document Services
            </CardTitle>
            <CardDescription>
              E-signature and document management tools
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y4">
            {integrations
              .filter(i => i.category === "Documents")
              .map(integration => (
                <div 
                  key={integration.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                      {getIcon(integration.icon)}
                    </div>
                    <div>
                      <h4 className="font-medium">{integration.name}</h4>
                      <p className="text-sm text-gray-500">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {integration.status === "connected" ? (
                      <>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                        <Button variant="outline" size="sm" onClick={() => handleDisconnect(integration.id)}>
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <>
                        <Badge variant="outline">
                          <XCircle className="h-3 w-3 mr-1" />
                          Not Connected
                        </Badge>
                        <Button size="sm" onClick={() => handleConnect(integration.id)}>
                          Connect
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
