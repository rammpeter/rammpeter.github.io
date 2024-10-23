
    function init_oracle_performance_tuning() {
      $('#jstree_div')
        // listen for event
        .on('changed.jstree', function (e, data) {
            show_dragnet_html(data.selected);
        })
        // create the instance
        .jstree({
          'core': {
            'multiple' : false,
            'data': [{
  "id": "0",
  "text": "1. Potential for improvement in DB-structures",
  "state": { "opened": false }
, "children": [{
  "id": "0_0",
  "text": "1. Ensure optimal storage parameter for indexes",
  "state": { "opened": false }
, "children": [{
  "id": "0_0_0",
  "text": "1. Check for PCTFree >= 10",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_1",
  "text": "2. Recommendations for index-compression, test by selectivity",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_2",
  "text": "3. Recommendations for index-compression, test by leaf-block count",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_3",
  "text": "4. Recommendations for index-compression, test by selectivity of single columns from multicolumn index",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_4",
  "text": "5. Recommendations for ADVANCED HIGH index compression",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_5",
  "text": "6. Avoid data redundancy in primary key index (move to index-organized tables)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_1",
  "text": "2. Detection of possibly unnecessary indexes",
  "state": { "opened": false }
, "children": [{
  "id": "0_1_0",
  "text": "1. Detection of indexes not used for access or ensurance of uniqueness",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_1",
  "text": "2. Detection of indexes with only one or little key values in index",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_2",
  "text": "3. Detection of indexes with multiple indexed columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_3",
  "text": "4. Detection of unused indexes by MONITORING USAGE",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_4",
  "text": "5. Detection of indexes without MONITORING USAGE",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_5",
  "text": "6. Coverage of foreign-key relations by indexes (detection of potentially unnecessary indexes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_6",
  "text": "7. Indexes on partitioned tables with same columns like partition keys",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_7",
  "text": "8. Removable indexes if column order of another multi-column index can be changed",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_8",
  "text": "9. Tables with single-column primary key constraint which is not referenced by any foreign key constraint",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_9",
  "text": "10. Detection of unused indexes by DBA_INDEX_USAGE (starting with Release 12.2)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_2",
  "text": "3. Detection of possibly unnecessary index columns",
  "state": { "opened": false }
, "children": [{
  "id": "0_2_0",
  "text": "1. Detection of indexes with unnecessary columns because of pure selectivity",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_2_1",
  "text": "2. Possibly unnecessary columns of indexes that are also partition keys",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_3",
  "text": "4. Recommendations for partitioning",
  "state": { "opened": false }
, "children": [{
  "id": "0_3_0",
  "text": "1. Local-partitioning for NonUnique-indexes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_1",
  "text": "2. Local-partitioning of unique indexes with partition-key = index-column",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_2",
  "text": "3. Local-partitioning of indexes with overhead in access",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_3",
  "text": "4. Partitioning for expensive full table scans with filters",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_4",
  "text": "5. Partitioning for expensive access filtered by columns with low number of distinct values",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_5",
  "text": "6. Recommendations for automatic LIST partitioning",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_4",
  "text": "5. Detection of unused tables or columns",
  "state": { "opened": false }
, "children": [{
  "id": "0_4_0",
  "text": "1. Detection of tables never accessed by SELECT statements",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_1",
  "text": "2. Missing housekeeping for mass data",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_2",
  "text": "3. Tables without write access (DML) since last analysis",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_3",
  "text": "4. Detection of not used columns (all values = NULL)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_4",
  "text": "5. Detection of less informative columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_5",
  "text": "6. Unused marked but not physical deleted columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_6",
  "text": "7. Dropped tables in recycle bin",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_7",
  "text": "8. CHAR-columns filled with unnecessary blanks",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_4_8",
  "text": "9. Empty partitions or subpartitions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_5",
  "text": "6. Materialized_views",
  "state": { "opened": false }
, "children": [{
  "id": "0_5_0",
  "text": "1. Orphaned materialized view logs",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_5_1",
  "text": "2. Registered materialized views without relation to MV-log",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_6",
  "text": "7. Foreign Key Constraints",
  "state": { "opened": false }
, "children": [{
  "id": "0_6_0",
  "text": "1. Coverage of foreign-key relations by indexes (detection of potentially missing indexes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_6_1",
  "text": "2. Non validated foreign key constraints",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_6_2",
  "text": "3. Unnecessary primary keys without referencing foreign keys",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_7",
  "text": "8. Recommendations for possibly useful OLTP-compression of tables",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_8",
  "text": "9. Possibly suboptimal OLTP-compression of tables",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_9",
  "text": "10. Tables with PCT_FREE > 0 but without update-DML",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_10",
  "text": "11. Relevance of access on migrated / chained rows compared to total amount of table access",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_11",
  "text": "12. Detection of chained rows of tables",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_12",
  "text": "13. Table access by rowid replaceable by index lookup (from current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_13",
  "text": "14. Table access by rowid replaceable by index lookup (from AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_14",
  "text": "15. Possibly expensive TABLE ACCESS BY INDEX ROWID with additional filter predicates on table",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_15",
  "text": "16. Possibly missing NOT NULL constraint, although there are no NULL values in column",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_16",
  "text": "17. Possibly compressable but currently uncompressed LOB-segments",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_17",
  "text": "18. Possible violations of DETERMINISTIC declared functions that are used in function-based indexes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1",
  "text": "2. Detection of SQL with problematic execution plan",
  "state": { "opened": false }
, "children": [{
  "id": "1_0",
  "text": "1. Optimizable full-scan operations",
  "state": { "opened": false }
, "children": [{
  "id": "1_0_0",
  "text": "1. Optimizable index full scan operations",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_0_1",
  "text": "2. Full table scans  with less result records: possibly missing indexes ",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_0_2",
  "text": "3. Full table scans  with small cardinality: possibly missing indexes ",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_0_3",
  "text": "4. Optimizable full table scan operations at long running foreign key checks by deletes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_0_4",
  "text": "5. Long running full table scans caused by IS NULL selection",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1_1",
  "text": "2. Potential for improvement in the use of Parallel Query",
  "state": { "opened": false }
, "children": [{
  "id": "1_1_0",
  "text": "1. Long running queries without usage of parallel query (Evaluation of SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_1",
  "text": "2. Long running queries without usage of parallel query (Evaluation of AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_2",
  "text": "3. Statements with parallel query but with not parallelized contents (evaluation of SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_3",
  "text": "4. Statements with parallel query but with not parallelized contents (evaluation of AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_4",
  "text": "5. SQLs executed in parallel but with usage of stored functions without PARALLEL_ENABLE",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_5",
  "text": "6. Statements with parallel query and serial processing of process parts",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_6",
  "text": "7. Parallel Query: Degree of parallelism (number of attached PQ servers) higher than limit for single SQL execution",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_7",
  "text": "8. Statements with planned parallel execution forced to serial",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_8",
  "text": "9. Problematic usage of parallel query for short running SQLs (Current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_9",
  "text": "10. Problematic usage of parallel query for short running SQLs (by SQL Monitor)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_10",
  "text": "11. Possible elimination of HASH JOIN BUFFERED by Parallel Shared Hash Join",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_1_11",
  "text": "12. Suppressed use of possibly expected parallel DML or direct load",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1_2",
  "text": "3. Potentially unnecessary execution of SQL statements",
  "state": { "opened": false }
, "children": [{
  "id": "1_2_0",
  "text": "1. Possibly unnecessary SQL executions if selects/updates/deletes never hit a record",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_2_1",
  "text": "2. Possibly unnecessary execution of statements if updates have unnecessary filter in WHERE-condition (examination of SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_2_2",
  "text": "3. Possibly unnecessary execution of statements if updates have unnecessary filter in WHERE-condition (examination of AWH history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1_3",
  "text": "4. Potentially unnecessary high execution/fetch-frequency of SQL statements",
  "state": { "opened": false }
, "children": [{
  "id": "1_3_0",
  "text": "1. Excessive number of cache buffer accesses",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_3_1",
  "text": "2. Frequent access on small objects",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_3_2",
  "text": "3. Unnecessary high fetch count because of missing usage of array-fetch: evaluation of SGA",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_3_3",
  "text": "4. Unnecessary high fetch count because of missing usage of array-fetch: evaluation of AWH history",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_3_4",
  "text": "5. Writing statements with unnecessary high execution count due to missing array processing",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1_4",
  "text": "5. Suboptimal index usage in SQL statements",
  "state": { "opened": false }
, "children": [{
  "id": "1_4_0",
  "text": "1. Sub-optimal index access with only partial usage of index",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_4_1",
  "text": "2. Excessive filtering after TABLE ACCESS BY ROWID due to weak index access criteria (current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_4_2",
  "text": "3. Excessive filtering after TABLE ACCESS BY ROWID due to weak index access criteria (AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1_5",
  "text": "6. Identification of statements with alternating execution plans in history",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_6",
  "text": "7. Nested loop join on large tables with large result of SQL (consideration of current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_7",
  "text": "8. Iteration in nested-loop join against full scan operation (current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_8",
  "text": "9. Implicit conversion by TO_NUMBER or INTERNAL_FUNCTION (prevented usage of indexes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_9",
  "text": "10. Problematic usage of cartesian joins (from current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_10",
  "text": "11. Problematic usage of cartesian joins (from AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_11",
  "text": "12. DELETE-operations replaceable by TRUNCATE",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_12",
  "text": "13. Possibly unnecessary scan of all partitions of a partitioned table or index",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "2",
  "text": "3. Detection of long running SQLs",
  "state": { "opened": false }
, "children": [{
  "id": "2_0",
  "text": "1. Long running single executions of SQL statements",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "3",
  "text": "4. Tuning of / load rejection from SGA, PGA",
  "state": { "opened": false }
, "children": [{
  "id": "3_0",
  "text": "1. Redundant cursors / usage of bind variables",
  "state": { "opened": false }
, "children": [{
  "id": "3_0_0",
  "text": "1. Missing usage of bind variables: Detection by identical plan-hash-value from Active Session History (SGA and AWR)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_1",
  "text": "2. Missing usage of bind variables: Detection by identical plan-hash-value from SQL Area in SGA",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_2",
  "text": "3. Missing usage of bind variables: Detection by identical force matching signature from SGA",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_3",
  "text": "4. Missing usage of bind variables: Detection by identical force matching signature from AWR history",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_4",
  "text": "5. Missing usage of bind variables: Detection by identical part of SQL-text",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_5",
  "text": "6. Number of distinct SQL-IDs per time in time line",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_6",
  "text": "7. Multiple open cursor: overview over SQL",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_7",
  "text": "8. Multiple open cursor: SQLs opened multiple in session",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_8",
  "text": "9. Concurrency on memory: sqeezing out in shared pool",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_9",
  "text": "10. Problems with function based index if cursor_sharing != EXACT",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_0_10",
  "text": "11. Critical amount of child cursors per SQL-ID",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "3_1",
  "text": "2. Soft parse activities / SQL statement cursor caching",
  "state": { "opened": false }
, "children": [{
  "id": "3_1_0",
  "text": "1. Parse activity",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_1_1",
  "text": "2. JDBC client statement cache probably not used (Evaluation of SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_1_2",
  "text": "3. JDBC client statement cache probably not used (Evaluation of AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "3_2",
  "text": "3. Identification of hot blocks in DB-cache: frequent access on small objects",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_3",
  "text": "4. Identification of hot blocks in DB-cache: suboptimal indexes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_4",
  "text": "5. Check necessity of update for indexed columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_5",
  "text": "6. Concurrency on memory, latches: insufficient cached sequences from DBA_Sequences",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_6",
  "text": "7. Concurrency on memory, latches: Overview over usage of sequences by SQLs",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_7",
  "text": "8. Active sessions (from AWR history DBA_Hist_Active_Sess_History)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_8",
  "text": "9. Non-optimal database configuration parameters",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "4",
  "text": "5. Logwriter load / redo impact",
  "state": { "opened": false }
, "children": [{
  "id": "4_0",
  "text": "1. Write access by executions (current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "4_1",
  "text": "2. Write access by executions (AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "4_2",
  "text": "3. Commit / Rollback - Emergence",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "4_3",
  "text": "4. Adjustment of recovery behaviour",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "5",
  "text": "6. Conclusions on appliction behaviour",
  "state": { "opened": false }
, "children": [{
  "id": "5_0",
  "text": "1. Potential for improvement in DB-Views",
  "state": { "opened": false }
, "children": [{
  "id": "5_0_0",
  "text": "1. Views with cascading dependiencies (multiple hierarchy)",
  "state": { "opened": false }
, "children": [{
  "id": "5_0_0_0",
  "text": "1. Cascading views (views with dependency from other views)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_0_0_1",
  "text": "2. SQLs using Cascading views (views with dependency from other views), evaluation of current SGA",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_0_0_2",
  "text": "3. SQLs using Cascading views (views with dependency from other views), evaluation of AWH History",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "5_0_1",
  "text": "2. Views with outer ORDER BY in View-SQL",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "5_1",
  "text": "2. Substantial larger runtime per module compared to average over longer time period",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_2",
  "text": "3. Usage of multi-column primary keys as reference target (business keys instead of technical keys)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_3",
  "text": "4. Missing suggested AUDIT rules for standard auditing",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_4",
  "text": "5. Missing suggested AUDIT rules for unified auditing",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_5",
  "text": "6. Long running transactions from SGA (gv$Active_Session_History)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_6",
  "text": "7. Long running transactions from AWH-history (DBA_Hist_Active_Sess_History)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_7",
  "text": "8. Possibly unnecessary update of primary key columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_8",
  "text": "9. Longer inactive sessions with continued active transactions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_9",
  "text": "10. Excessive logon operations (by listener-log)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_10",
  "text": "11. Excessive logon operations (by current gv$Session)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_11",
  "text": "12. Possibly missing guaranty of uniqueness by unique index or unique / primary key constraint",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_12",
  "text": "13. Possibly probematic NULL-handling in bind variables (:A1 IS NULL OR Column = :A1)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_13",
  "text": "14. Volatile columns in result due to 'SELECT * FROM table'",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "6",
  "text": "7. PL/SQL-usage hints",
  "state": { "opened": false }
, "children": [{
  "id": "6_0",
  "text": "1. Usage of NVL with function call as alternative parameter",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "6_1",
  "text": "2. Identification of probably unused PL/SQL-objects",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "6_2",
  "text": "3. Candidates for PRAGMA UDF in pure user-defined PL/SQL functions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "6_3",
  "text": "4. Candidates for DETERMINISTIC in user-defined PL/SQL functions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "7",
  "text": "8. Instance-setup, tuning and monitoring",
  "state": { "opened": false }
, "children": [{
  "id": "7_0",
  "text": "1. Parallel query usage",
  "state": { "opened": false }
, "children": [{
  "id": "7_0_0",
  "text": "1. Current usage of parallel query by PQ coordinator sessions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "7_0_1",
  "text": "2. Active parallel query slave (PQ) sessions from Active Session History (ASH)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "7_1",
  "text": "2. Inconsistent dependency timestamps between dependency and parent object",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "7_2",
  "text": "3. System-statistics: Check for up-to-date system analyze info",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "7_3",
  "text": "4. Objekt statistics: Check on up-to-date analyze info (Tables)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "7_4",
  "text": "5. Objekt statistics: Check on up-to-date analyze info (Indexes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "7_5",
  "text": "6. TNS service usage by sessions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]} ]
          }
        });
    }
    