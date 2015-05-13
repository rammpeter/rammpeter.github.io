
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
  "text": "1. Potential in DB-structures",
  "state": { "opened": false }
, "children": [{
  "id": "0_0",
  "text": "1. Ensure optimal storage parameter for indexes",
  "state": { "opened": false }
, "children": [{
  "id": "0_0_0",
  "text": "1. Ensure PCTFree >= 10",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_1",
  "text": "2. Test for recommendable index-compression",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_2",
  "text": "3. Recommendations for index-compression, test by leaf-block count",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_0_3",
  "text": "4. Avoid data redundancy in primary key index (move to index-organized tables)",
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
  "text": "2. Detection of indexes with only one ore little key values in index",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_2",
  "text": "3. Detection of indexes with multiple indexed columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_3",
  "text": "4. Detection of unused indexes by system monitoring",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_4",
  "text": "5. Detection of indexes with unnecessary columns because of pure selectivity",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_1_5",
  "text": "6. Coverage of foreign-key relations by indexes (detection of potentially unnecessary indexes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_2",
  "text": "3. Recommendations for index partitioning",
  "state": { "opened": false }
, "children": [{
  "id": "0_2_0",
  "text": "1. Local-partitioning for NonUnique-indexes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_2_1",
  "text": "2. Local-partitioning of unique indexes with partition-key = index-column",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_2_2",
  "text": "3. Local-partitioning with overhead in access",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_3",
  "text": "4. Detection of unused tables or columns",
  "state": { "opened": false }
, "children": [{
  "id": "0_3_0",
  "text": "1. Detection of unused tables",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_1",
  "text": "2. Missing housekeeping for mass data",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_2",
  "text": "3. Detection of not used columns (all values = NULL)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_3",
  "text": "4. Detection of less informative columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_4",
  "text": "5. Unused marked but not physical deleted columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_3_5",
  "text": "6. Dropped tables in recycle bin",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "0_4",
  "text": "5. Possibly useful compression of tables",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_5",
  "text": "6. Coverage of foreign-key relations by indexes (detection of potentially missing indexes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_6",
  "text": "7. Detection of chained rows of tables",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_7",
  "text": "8. Table access by rowid replaceable by index lookup (from current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "0_8",
  "text": "9. Table access by rowid replaceable by index lookup (from AWR history)",
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
  "text": "2. Optimizable full table scan operations by executions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_0_2",
  "text": "3. Optimizable full table scans operations by executions and rows processed",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_0_3",
  "text": "4. Optimizable full table scan operations at long running foreign key checks by deletes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "1_1",
  "text": "2. Übermäßige Anzahl Zugriffe auf Cache-Buffer",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_2",
  "text": "3. Statements mit unnötig hoher Ausführungszahl: Zugriff auf kleine Objekte",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_3",
  "text": "4. Unnötig hohe Fetch-Anzahl wegen fehlender Array-Nutzung: Auswertung SGA",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_4",
  "text": "5. Unnötig hohe Fetch-Anzahl wegen fehlender Array-Nutzung: Auswertung AWR-Historie",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_5",
  "text": "6. Statements mit unnötig hoher Ausführungszahl: Unnötig hohe Execute-Anzahl wegen fehlender Array-Verarbeitung",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_6",
  "text": "7. Unnötige Ausführung von Statements: Selects/Updates/Deletes ohne Treffer",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_7",
  "text": "8. Unnötige Ausführung von Statements: Updates mit unnötigem Filter in WHERE-Bedingung (Auswertung SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_8",
  "text": "9. Unnötige Ausführung von Statements: Updates mit unnötigem Filter in WHERE-Bedingung (Auswertung AWR-Historie)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_9",
  "text": "10. Langlaufende Statements ohne Nutzung Parallel Query (Auswertung SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_10",
  "text": "11. Langlaufende Statements ohne Nutzung Parallel Query (Auswertung AWR-Historie)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_11",
  "text": "12. Probleme bei Nutzung Parallel Query: Parallelisierte Statements mit nicht parallelisierten Anteilen (Auswertung SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_12",
  "text": "13. Probleme bei Nutzung Parallel Query: Parallelisierte Statements mit nicht parallelisierten Anteilen (Auswertung AWR-Historie)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_13",
  "text": "14. Probleme bei Nutzung Parallel Query: Parallel ausgeführte SQL mit Nutzung Stored Functions ohne PARALLEL_ENABLE",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_14",
  "text": "15. Probleme bei Nutzung Parallel Query: Parallele Statements mit serieller Abarbeitung von Teilprozessen",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_15",
  "text": "16. Parallel Query: Degree of parallelism (number of attached PQ servers) higher than limit for single SQL execution",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_16",
  "text": "17. Identifikation von Statements mit wechselndem Ausführungsplan aus Historie",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_17",
  "text": "18. Nested-Loop-Join auf große Tabellen mit großem Result des SQL (Test per SGA-Statement-Cache)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_18",
  "text": "19. Iteration im Nested-Loop-Join gegen Full-Scan-Operation",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_19",
  "text": "20. Implizite Konvertierungen per INTERNAL_FUNCTION",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_20",
  "text": "21. Lang laufende Full Table Scans durch IS NULL-Abfrage (ab 11g)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_21",
  "text": "22. Problematic usage of cartesian joins (from current SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "1_22",
  "text": "23. Problematic usage of cartesian joins (from AWR history)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "2",
  "text": "3. Tuning of / load rejection from SGA, PGA",
  "state": { "opened": false }
, "children": [{
  "id": "2_0",
  "text": "1. Identifikation von HotBlocks im DB-Cache: Viele Zugriffe auf kleine Objekte",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_1",
  "text": "2. Identifikation von HotBlocks im DB-Cache: Suboptimale Indizes",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_2",
  "text": "3. Prüfung der Notwendigkeit des Updates indizierter Spalten",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_3",
  "text": "4. System- Statistiken: Prüfung auf aktuelle Analyze-Info",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_4",
  "text": "5. Objekt-Statistiken: Prüfung auf aktuelle Analyze-Info (Tables)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_5",
  "text": "6. Objekt-Statistiken: Prüfung auf aktuelle Analyze-Info (Indizes)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_6",
  "text": "7. PGA-Auslastung: Historische Auslastung PGA-Strukturen",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_7",
  "text": "8. Konkurrenz bzgl. Speicher, Latches: Unzureichend gecachte Sequences",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_8",
  "text": "9. Konkurrenz bzgl. Speicher, Latches: Überblick über Sequence-Nutzung",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_9",
  "text": "10. Aktive Sessions (AWR-Historie)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_10",
  "text": "11. Parse-Aktivität",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "2_11",
  "text": "12. Non-optimal database configuration parameters",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "3",
  "text": "4. Redundant cursors / usage of bind variables",
  "state": { "opened": false }
, "children": [{
  "id": "3_0",
  "text": "1. Fehlende Nutzung von Bindevariablen",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_1",
  "text": "2. Mehrfach offene Cursoren: Überblick über SQL",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_2",
  "text": "3. Mehrfach offene Cursoren: Mehrfach in Session geöffnete SQL",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_3",
  "text": "4. Konkurrenz bzgl. Speicher: Verdrängung im Shared Pool",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_4",
  "text": "5. Probleme mit Function-based Index bei cusor_sharing != EXACT",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "3_5",
  "text": "6. Critical amount of child cursors per SQL-ID",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "4",
  "text": "5. Logwriter load / redo impact",
  "state": { "opened": false }
, "children": [{
  "id": "4_0",
  "text": "1. Schreibende Zugriffe nach Executions (Aktuelle SGA)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "4_1",
  "text": "2. Schreibende Zugriffe nach Executions (AWR-Historie)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "4_2",
  "text": "3. Commit / Rollback - Aufkommen",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "4_3",
  "text": "4. Einstellung Recovery-Verhalten",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "5",
  "text": "6. Conclusions on appliction behaviour",
  "state": { "opened": false }
, "children": [{
  "id": "5_0",
  "text": "1. Erheblich größere Laufzeit je Module gegenüber Durchschnitt über längere Zeit",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_1",
  "text": "2. Usage of multi-column primary keys as reference target (business keys instead of technical keys)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_2",
  "text": "3. Missing suggested AUDIT-options",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_3",
  "text": "4. Long running transactions from SGA (gv$Active_Session_History)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_4",
  "text": "5. Long running transactions from AWH-history (DBA_Hist_Active_Sess_History)",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_5",
  "text": "6. Possibly unnecessary update of primary key columns",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"},{
  "id": "5_6",
  "text": "7. Longer inactive sessions with continued active transactions",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]},{
  "id": "6",
  "text": "7. PL/SQL-usage hints",
  "state": { "opened": false }
, "children": [{
  "id": "6_0",
  "text": "1. Usage of NVL with function call as alternative parameter",
  "state": { "opened": false }
, "icon":"images/application-monitor.png"} ]} ]
          }
        });
    }
    