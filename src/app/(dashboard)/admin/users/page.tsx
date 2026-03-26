"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Shield, 
  UserCircle, 
  MoreHorizontal,
  Search,
  Settings,
  Building2,
  Mail,
  Phone,
  LinkIcon
} from "lucide-react";
import Link from "next/link";

interface Role {
  id: string;
  name: string;
  description: string;
  userCount: number;
  permissions: string[];
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  organization: string;
  status: "active" | "invited" | "inactive";
}

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roles, setRoles] = useState<Role[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch users from API - returns org-wide for SYSTEM_ADMIN
        const usersRes = await fetch('/api/auth/users');
        if (!usersRes.ok) throw new Error('Failed to fetch users');
        const usersData = await usersRes.json();
        
        // Transform API data for admin view
        const transformedUsers: User[] = Array.isArray(usersData) ? usersData.map((u: any) => ({
          id: u.id,
          name: u.firstName && u.lastName ? `${u.firstName} ${u.lastName}` : u.name || 'Unknown',
          email: u.email || '',
          phone: u.phone || '',
          role: u.role || 'TENANT',
          organization: u.organization?.name || 'N/A',
          status: u.emailVerified ? 'active' : 'invited'
        })) : [];
        
        setUsers(transformedUsers);
        
        // Generate roles from user data - admin view shows all roles
        const roleCounts = transformedUsers.reduce((acc, user) => {
          acc[user.role] = (acc[user.role] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        const roleData: Role[] = [
          {
            id: "system_admin",
            name: "System Admin",
            description: "Full platform access and settings",
            userCount: roleCounts['SYSTEM_ADMIN'] || 0,
            permissions: ["all"]
          },
          {
            id: "property_manager",
            name: "Property Manager",
            description: "Manage properties, tenants, and finance",
            userCount: roleCounts['PROPERTY_MANAGER'] || 0,
            permissions: ["properties", "tenants", "leases", "finance"]
          },
          {
            id: "agent",
            name: "Agent",
            description: "Can manage properties and tenants",
            userCount: roleCounts['AGENT'] || 0,
            permissions: ["properties", "tenants", "leases"]
          },
          {
            id: "vendor",
            name: "Vendor",
            description: "Can view and respond to maintenance requests",
            userCount: roleCounts['VENDOR'] || 0,
            permissions: ["maintenance", "reports"]
          },
          {
            id: "tenant",
            name: "Tenant",
            description: "Can view lease and make payments",
            userCount: roleCounts['TENANT'] || 0,
            permissions: ["lease", "payments", "maintenance"]
          }
        ];
        
        setRoles(roleData);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case "invited":
        return <Badge className="bg-blue-100 text-blue-700">Pending Invite</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-700">Inactive</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "SYSTEM_ADMIN":
        return <Badge className="bg-red-100 text-red-700">System Admin</Badge>;
      case "PROPERTY_MANAGER":
        return <Badge className="bg-purple-100 text-purple-700">Property Manager</Badge>;
      case "AGENT":
        return <Badge className="bg-blue-100 text-blue-700">Agent</Badge>;
      case "VENDOR":
        return <Badge className="bg-orange-100 text-orange-700">Vendor</Badge>;
      case "TENANT":
        return <Badge className="bg-green-100 text-green-700">Tenant</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10 max-w-6xl">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading users...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 max-w-6xl">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-500 mb-2">Error: {error}</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-gray-500 mt-1">
            Manage all users across organizations. View and manage user roles and permissions.
          </p>
        </div>
        <Link href="/admin/invites">
          <Button>
            <Mail className="h-4 w-4 mr-2" />
            Send Invites
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {/* Roles Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {roles.map(role => (
            <Card key={role.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{role.name}</CardTitle>
                  <Shield className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-3">{role.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{role.userCount}</span>
                  <span className="text-sm text-gray-500">users</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              All Users
            </CardTitle>
            <CardDescription>
              View and manage users across all organizations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users by name, email, role, or organization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Users Table */}
            <div className="rounded-md border">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Organization</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                        No users found. Try adjusting your search or send invites.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <UserCircle className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {getRoleBadge(user.role)}
                        </td>
                        <td className="px-4 py-3">
                          {user.organization ? (
                            <div className="flex items-center gap-2 text-sm">
                              <Building2 className="h-4 w-4 text-gray-400" />
                              {user.organization}
                            </div>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {getStatusBadge(user.status)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
