"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  UserPlus, 
  Users,
  Building2,
  Truck,
  UserCircle,
  Send,
  Copy,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Invite {
  id: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  expiresAt: string;
  organizationId?: string;
}

export default function AdminInvitesPage() {
  const [activeTab, setActiveTab] = useState("vendor");
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Form state
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceType, setServiceType] = useState("");

  useEffect(() => {
    // Fetch invites when tab changes
    if (activeTab === "vendor") {
      fetchVendorInvites();
    }
  }, [activeTab]);

  const fetchVendorInvites = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/invites/vendor');
      if (!res.ok) throw new Error('Failed to fetch invites');
      const data = await res.json();
      setInvites(data.invites || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load invites');
      setInvites([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const endpoint = '/api/auth/invites/vendor';
      const body: Record<string, string> = {
        email,
        firstName,
        lastName,
        phone,
        companyName,
        serviceType
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send invite');
      }

      setSuccess(`Invite sent to ${email} successfully!`);
      // Reset form
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setCompanyName("");
      setServiceType("");
      
      // Refresh invites list
      fetchVendorInvites();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send invite');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusBadge = (invite: Invite) => {
    // Check if expired
    if (new Date(invite.expiresAt) < new Date()) {
      return <Badge className="bg-gray-100 text-gray-700">Expired</Badge>;
    }
    // Check status from invite
    if (invite.status === 'ACCEPTED') {
      return <Badge className="bg-green-100 text-green-700">Accepted</Badge>;
    }
    return <Badge className="bg-blue-100 text-blue-700">Pending</Badge>;
  };

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Send Invites</h1>
        <p className="text-gray-500 mt-1">
          Invite new users to join the platform. Select a role type below.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="tenant" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Tenant
          </TabsTrigger>
          <TabsTrigger value="vendor" className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Vendor
          </TabsTrigger>
          <TabsTrigger value="agent" className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            Agent
          </TabsTrigger>
        </TabsList>

        {/* Tenant Tab */}
        <TabsContent value="tenant">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Invite Tenant
              </CardTitle>
              <CardDescription>
                Tenants are linked to leases. This requires selecting a property and lease.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800">Tenant invites require property context</p>
                    <p className="text-sm text-amber-700 mt-1">
                      To invite tenants, navigate to a specific property manager dashboard and use the tenant management section. 
                      Tenant invites are tied to leases and properties.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Go to <span className="font-medium">Property Manager → Tenants → Invite Tenant</span> to send tenant invites.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Vendor Tab */}
        <TabsContent value="vendor">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Send Invite Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Vendor Invite
                </CardTitle>
                <CardDescription>
                  Invite a vendor to join your organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">{success}</span>
                    </div>
                  </div>
                )}
                
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">{error}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vendor@company.com"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name *</label>
                      <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Company Name</label>
                    <Input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="ABC Services LLC"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Service Type</label>
                    <Input
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      placeholder="Plumbing, Electrical, HVAC, etc."
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Invite
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Pending Invites List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Pending Invites
                </CardTitle>
                <CardDescription>
                  View and manage pending vendor invitations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                  </div>
                ) : invites.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Mail className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p>No pending vendor invites</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {invites.map((invite) => (
                      <div
                        key={invite.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <Truck className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-medium">{invite.email}</p>
                            <p className="text-sm text-gray-500">
                              Sent {formatDate(invite.createdAt)} • Expires {formatDate(invite.expiresAt)}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(invite)}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Agent Tab */}
        <TabsContent value="agent">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                Invite Agent
              </CardTitle>
              <CardDescription>
                Agents are typically invited by tenants to help manage their properties.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800">Agent invites require tenant context</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Agents are invited by tenants who own properties. This workflow is initiated from the tenant side.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                To invite agents, tenants can use the agent invitation feature from their dashboard.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
