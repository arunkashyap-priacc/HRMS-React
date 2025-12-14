
export const employeeData = {
  EMP001: {
    name: "KUMAR",

    attendance: [
      { date: "2025-12-01", status: "Present" },
      { date: "2025-12-02", status: "Present" },
      { date: "2025-12-03", status: "Absent" },
      { date: "2025-12-04", status: "Present" },
    ],

    payslips: [
      {
        month: "October 2025",
        basic: 24000,
        hra: 8000,
        allowances: 3000,
        deductions: 2000,
        net: 33000,
      },
      {
        month: "November 2025",
        basic: 25000,
        hra: 10000,
        allowances: 3000,
        deductions: 2000,
        net: 36000,
      },
    ],

    wallet: {
      totalEarned: 69000,
      totalPaid: 65000,
      balance: 4000,
    },

    leaves: [
      {
        from: "2025-11-20",
        to: "2025-11-21",
        reason: "Personal",
        status: "Approved",
      },
    ],
  },
};