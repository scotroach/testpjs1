
  pjs.defineProc("fixQualified", {
    srvpgm: "???",
    extProc: "FIXQUALIFIED",
    parms: [
      { name: "StringIn", type: 'char', length: 20, byRef: true },
      { name: "SecondOut", type: 'char', length: 10, byRef: true }
    ],
    result: { type: 'char', length: 21, varying: true }
  });

  pjs.defineProc("resequenceEventFile", {
    srvpgm: "???",
    extProc: "RESEQUENCEEVENTFILE",
    parms: [
      { name: "PgmLib", type: 'char', length: 10, const: true, byRef: true },
      { name: "EventFlag", type: 'boolean', const: true, byRef: true },
      { name: "Member", type: 'char', length: 10, const: true, byRef: true }
    ]
  });