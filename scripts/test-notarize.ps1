# Test Notarize API
# Usage: .\test-notarize.ps1 -DocumentId "YOUR_DOCUMENT_UUID"

param (
    [string]$DocumentId,
    [string]$BaseUrl = "http://localhost:3000",
    [string]$Email = "manager@test.com",
    [string]$Password = "password123",
    [string]$SeedEnvFile = ".env.test",
    [bool]$AutoSeedOnNotFound = $true
)

$LoginUrl = "$BaseUrl/api/auth/login"
$Url = "$BaseUrl/api/dss/notarize"
$DocumentsUrl = "$BaseUrl/api/dss/documents"

$LoginBody = @{
    email    = $Email
    password = $Password
} | ConvertTo-Json

function New-TestDocumentId {
    Write-Host "[INFO] Seeding a completed DSS document with $SeedEnvFile..." -ForegroundColor Yellow
    $seedOutput = npx dotenv -e $SeedEnvFile -- tsx scripts/seed-dss-test.ts 2>&1
    $seedText = ($seedOutput | Out-String).Trim()

    if ($LASTEXITCODE -ne 0) {
        throw "Failed to seed DSS test document. Output:`n$seedText"
    }

    $match = [regex]::Match($seedText, '([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})')
    if (-not $match.Success) {
        throw "Seed succeeded but document ID could not be parsed. Output:`n$seedText"
    }

    return $match.Groups[1].Value
}

function Test-DocumentVisibleToApi([string]$docId, [Microsoft.PowerShell.Commands.WebRequestSession]$session) {
    try {
        $list = Invoke-RestMethod `
            -Uri $DocumentsUrl `
            -Method Get `
            -WebSession $session

        if ($list -and $list.documents) {
            foreach ($doc in $list.documents) {
                if ($doc.id -eq $docId) {
                    return $true
                }
            }
        }
    }
    catch {
        # If list endpoint is unavailable or fails, do not block notarize flow.
        return $true
    }

    return $false
}

function Invoke-NotarizeRequest([string]$docId, [Microsoft.PowerShell.Commands.WebRequestSession]$session) {
    $body = @{ documentId = $docId } | ConvertTo-Json
    return Invoke-RestMethod `
        -Uri $Url `
        -Method Post `
        -Body $body `
        -ContentType "application/json" `
        -WebSession $session
}

Write-Host "Authenticating at $LoginUrl as $Email..." -ForegroundColor Cyan

try {
    $Session = New-Object Microsoft.PowerShell.Commands.WebRequestSession

    $LoginResponse = Invoke-RestMethod `
        -Uri $LoginUrl `
        -Method Post `
        -Body $LoginBody `
        -ContentType "application/json" `
        -WebSession $Session

    Write-Host "[OK] Authenticated as role: $($LoginResponse.user.role)" -ForegroundColor Green
    if ([string]::IsNullOrEmpty($DocumentId)) {
        $DocumentId = New-TestDocumentId
        Write-Host "[OK] Generated Document ID: $DocumentId" -ForegroundColor Green
    }

    Write-Host "Sending request to $Url for Document ID: $DocumentId..." -ForegroundColor Cyan

    try {
        $Response = Invoke-NotarizeRequest -docId $DocumentId -session $Session
    }
    catch {
        $errText = ""
        if ($_.Exception.Response) {
            $Stream = $_.Exception.Response.GetResponseStream()
            $Reader = New-Object System.IO.StreamReader($Stream)
            $errText = $Reader.ReadToEnd()
        }

        if ($AutoSeedOnNotFound -and $errText -match 'Document not found') {
            Write-Host "[INFO] Provided document ID was not found in current DB. Auto-seeding and retrying..." -ForegroundColor Yellow
            $DocumentId = New-TestDocumentId
            Write-Host "[OK] Retrying with seeded Document ID: $DocumentId" -ForegroundColor Green

            if (-not (Test-DocumentVisibleToApi -docId $DocumentId -session $Session)) {
                throw "Seeded document is not visible to API at $BaseUrl. This usually means your running Next.js server is connected to a different DB than $SeedEnvFile. Start API with the same env file, e.g. 'npx dotenv -e $SeedEnvFile -- nx dev'."
            }

            $Response = Invoke-NotarizeRequest -docId $DocumentId -session $Session
        }
        else {
            throw
        }
    }

    Write-Host "[OK] Success!" -ForegroundColor Green
    Write-Host ($Response | ConvertTo-Json -Depth 5)
}
catch {
    Write-Host "[ERROR]" -ForegroundColor Red
    if ($_.Exception.Response) {
        $Stream = $_.Exception.Response.GetResponseStream()
        $Reader = New-Object System.IO.StreamReader($Stream)
        Write-Host $Reader.ReadToEnd()
    }
    else {
        Write-Host $_.Exception.Message
    }
}
