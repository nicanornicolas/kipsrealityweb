"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Phone, 
  Mail, 
  Home, 
  Building2,
  UserCircle,
  MoreHorizontal,
  MessageSquare,
  FileText,
  Filter,
  AlertCircle
} from "lucide-react";

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  unit: string;
  leaseStatus: "active" | "expiring" | "expired";
  moveInDate: string;
  rentAmount: number;
  balance: number;
}

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [properties, setProperties] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch tenants
        const tenantsRes = await fetch('/api/tenants');
        if (!tenantsRes.ok) throw new Error('Failed to fetch tenants');
        const tenantsData = await tenantsRes.json();
        
        // Transform API data to match interface
        const transformedTenants: Tenant[] = Array.isArray(tenantsData) ? tenantsData.map((t: any) => ({
          id: t.id,
          name: t.firstName && t.lastName ? `${t.firstName} ${t.lastName}` : t.name || 'Unknown',
          email: t.email || '',
          phone: t.phone || '',
          property: t.property?.name || t.propertyName || '',
          unit: t.unit?.unitNumber || t.unitNumber || '',
          leaseStatus: t.leaseStatus || 'active',
          moveInDate: t.moveInDate || t.createdAt?.split('T')[0] || '',
          rentAmount: t.rentAmount || t.rent || 0,
          balance: t.balance || 0
        })) : [];
        
        setTenants(transformedTenants);
        
        // Extract unique properties
        const uniqueProperties = [...new Set(transformedTenants.map(t => t.property).filter(Boolean))];
        setProperties(['all', ...uniqueProperties]);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-10 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Tenant Directory</h1>
            <p className="text-gray-500 mt-1">
              View and manage all your tenant contacts in one place.
            </p>
          </div>
        </div>
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-4 animate-pulse" />
            <p className="text-gray-500">Loading tenants...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Tenant Directory</h1>
            <p className="text-gray-500 mt-1">
              View and manage all your tenant contacts in one place.
            </p>
          </div>
        </div>
        <Card>
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-red-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Failed to load tenants</h3>
            <p className="text-gray-500 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = 
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.phone.includes(searchTerm) ||
      tenant.unit.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProperty = propertyFilter === "all" || tenant.property === propertyFilter;
    const matchesStatus = statusFilter === "all" || tenant.leaseStatus === statusFilter;
    
    return matchesSearch && matchesProperty && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case "expiring":
        return <Badge className="bg-yellow-100 text-yellow-700">Expiring Soon</Badge>;
      case "expired":
        return <Badge className="bg-red-100 text-red-700">Expired</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getBalanceColor = (balance: number) => {
    if (balance === 0) return "text-green-600";
    if (balance > 10000) return "text-red-600";
    return "text-yellow-600";
  };

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Tenant Directory</h1>
          <p className="text-gray-500 mt-1">
            View and manage all your tenant contacts in one place.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            {tenants.length} Total Tenants
          </Badge>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, phone, or unit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                value={propertyFilter}
                onChange={(e) => setPropertyFilter(e.target.value)}
                className="flex h-10 w-full md:w-48 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Properties</option>
                {properties.filter(p => p !== "all").map(prop => (
                  <option key={prop} value={prop}>{prop}</option>
                ))}
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex h-10 w-full md:w-40 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="expiring">Expiring</option>
                <option value="expired">Expired</option>
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Tenants</p>
                <p className="text-2xl font-bold">{tenants.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Leases</p>
                <p className="text-2xl font-bold">{tenants.filter(t => t.leaseStatus === "active").length}</p>
              </div>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Expiring Soon</p>
                <p className="text-2xl font-bold">{tenants.filter(t => t.leaseStatus === "expiring").length}</p>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Warning</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Outstanding Balance</p>
                <p className="text-2xl font-bold">
                  KES {tenants.reduce((sum, t) => sum + t.balance, 0).toLocaleString()}
                </p>
              </div>
              <Badge className="bg-red-100 text-red-700">Due</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Tenant</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Property / Unit</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Lease Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Rent</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Balance</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredTenants.map(tenant => (
                <tr key={tenant.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <UserCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{tenant.name}</p>
                        <p className="text-xs text-gray-500">Since {tenant.moveInDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      <div>
                        <p>{tenant.property}</p>
                        <p className="text-gray-500">{tenant.unit}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3 text-gray-400" />
                        {tenant.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Mail className="h-3 w-3" />
                        {tenant.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {getStatusBadge(tenant.leaseStatus)}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium">
                      KES {tenant.rentAmount.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${getBalanceColor(tenant.balance)}`}>
                      {tenant.balance === 0 ? "— " : `KES ${tenant.balance.toLocaleString()}`}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" title="Send Message">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="View Lease">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {filteredTenants.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No tenants found</h3>
            <p className="text-gray-500">
              {searchTerm ? "Try adjusting your search or filters" : "Add tenants to your properties to see them here"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
