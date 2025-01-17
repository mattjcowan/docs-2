---
title: OrmLite Stored Procedure Usage
---

The Raw SQL APIs provide a convenient way for mapping results of any Custom SQL like
executing Stored Procedures:

```csharp
List<Poco> results = db.SqlList<Poco>("EXEC GetAnalyticsForWeek 1");
List<Poco> results = db.SqlList<Poco>(
    "EXEC GetAnalyticsForWeek @weekNo", new { weekNo = 1 });

List<int> results = db.SqlList<int>("EXEC GetTotalsForWeek 1");
List<int> results = db.SqlList<int>(
    "EXEC GetTotalsForWeek @weekNo", new { weekNo = 1 });

int result = db.SqlScalar<int>("SELECT 10");
```

## Stored Procedures with output params

The `SqlProc` API provides even greater customization by letting you modify the underlying
ADO.NET Stored Procedure call by returning a prepared `IDbCommand` allowing for
advanced customization like setting and retrieving OUT parameters, e.g:

```csharp
string spSql = @"DROP PROCEDURE IF EXISTS spSearchLetters;
    CREATE PROCEDURE spSearchLetters (IN pLetter varchar(10), OUT pTotal int)
    BEGIN
        SELECT COUNT(*) FROM LetterFrequency WHERE Letter = pLetter INTO pTotal;
        SELECT * FROM LetterFrequency WHERE Letter = pLetter;
    END";

db.ExecuteSql(spSql);

using (var cmd = db.SqlProc("spSearchLetters", new { pLetter = "C" }))
{
    var pTotal = cmd.AddParam("pTotal", direction: ParameterDirection.Output);

    var results = cmd.ConvertToList<LetterFrequency>();
    var total = pTotal.Value;
}
```

An alternative approach is to use `SqlList` which lets you use a filter to customize a
Stored Procedure or any other command type, e.g:

```csharp
IDbDataParameter pTotal = null;
var results = db.SqlList<LetterFrequency>("spSearchLetters", cmd => {
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.AddParam("pLetter", "C");
        pTotal = cmd.AddParam("pTotal", direction: ParameterDirection.Output);
    });
var total = pTotal.Value;
```

More examples can be found in [SqlServerProviderTests](https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/SqlServerProviderTests.cs).
