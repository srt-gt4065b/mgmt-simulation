// Firebase 초기 데이터 셋업 스크립트
// 이 스크립트는 Firebase Console에서 직접 실행하거나
// Node.js 환경에서 Firebase Admin SDK로 실행할 수 있습니다.

// ============================================
// 사용 방법
// ============================================
// 1. Firebase Console → Firestore Database 접속
// 2. 아래 데이터를 각 컬렉션에 수동으로 추가
// 
// 또는
//
// 1. Node.js 환경에서 Firebase Admin SDK 설치
//    npm install firebase-admin
// 2. 서비스 계정 키 다운로드
// 3. 이 스크립트 실행
//    node init-data.js

// ============================================
// Teams 컬렉션
// ============================================
const teams = {
  "team1": {
    id: "team1",
    name: "Team Alpha",
    level: 8,
    totalXP: 3250,
    currentXP: 460,
    nextLevelXP: 4550,
    capital: 250000000,
    revenue: 45000000,
    revenueChange: 12,
    factories: 3,
    employees: 127,
    marketShare: 18.5,
    rank: 3,
    members: ["user1", "user2", "user3", "user4", "user5"],
    memberDetails: [
      { id: "user1", name: "김철수", role: "CEO", avatar: "👨" },
      { id: "user2", name: "이영희", role: "CFO", avatar: "👩" },
      { id: "user3", name: "박민수", role: "CMO", avatar: "👨" },
      { id: "user4", name: "최지연", role: "COO", avatar: "👩" },
      { id: "user5", name: "정수현", role: "CHRO", avatar: "👨" }
    ],
    courseId: "MGMT101",
    semester: "2024-2",
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date()
  },
  
  "team2": {
    id: "team2",
    name: "Team Beta",
    level: 7,
    totalXP: 2850,
    currentXP: 320,
    nextLevelXP: 3800,
    capital: 235000000,
    revenue: 42000000,
    revenueChange: 8,
    factories: 3,
    employees: 115,
    marketShare: 16.8,
    rank: 4,
    members: ["user6", "user7", "user8", "user9", "user10"],
    courseId: "MGMT101",
    semester: "2024-2",
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date()
  },
  
  "team3": {
    id: "team3",
    name: "Team Gamma",
    level: 9,
    totalXP: 4100,
    currentXP: 680,
    nextLevelXP: 5200,
    capital: 265000000,
    revenue: 50000000,
    revenueChange: 15,
    factories: 4,
    employees: 142,
    marketShare: 20.8,
    rank: 2,
    members: ["user11", "user12", "user13", "user14", "user15"],
    courseId: "MGMT101",
    semester: "2024-2",
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date()
  },
  
  "team4": {
    id: "team4",
    name: "Team Delta",
    level: 10,
    totalXP: 4800,
    currentXP: 950,
    nextLevelXP: 6000,
    capital: 285000000,
    revenue: 55000000,
    revenueChange: 18,
    factories: 4,
    employees: 158,
    marketShare: 22.5,
    rank: 1,
    members: ["user16", "user17", "user18", "user19", "user20"],
    courseId: "MGMT101",
    semester: "2024-2",
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date()
  },
  
  "team5": {
    id: "team5",
    name: "Team Epsilon",
    level: 7,
    totalXP: 2950,
    currentXP: 410,
    nextLevelXP: 3800,
    capital: 235000000,
    revenue: 40000000,
    revenueChange: 10,
    factories: 2,
    employees: 108,
    marketShare: 16.2,
    rank: 4,
    members: ["user21", "user22", "user23", "user24", "user25"],
    courseId: "MGMT101",
    semester: "2024-2",
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date()
  }
};

// ============================================
// Game State 컬렉션
// ============================================
const gameState = {
  "MGMT101": {
    courseId: "MGMT101",
    currentTurn: 5,
    totalTurns: 12,
    status: "in_progress", // waiting, in_progress, completed
    turnDeadline: new Date("2024-12-15T23:59:59"),
    marketConditions: {
      demand: 50000,
      competitionLevel: "high",
      economyState: "growth",
      interestRate: 4.5,
      inflationRate: 2.8
    },
    semester: "2024-2",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-12-20"),
    lastUpdated: new Date()
  }
};

// ============================================
// Leaderboard 컬렉션
// ============================================
const leaderboard = {
  "MGMT101": {
    courseId: "MGMT101",
    rankings: [
      {
        teamId: "team4",
        teamName: "Team Delta",
        capital: 285000000,
        revenue: 55000000,
        marketShare: 22.5,
        rank: 1,
        change: 0,
        trend: "stable"
      },
      {
        teamId: "team3",
        teamName: "Team Gamma",
        capital: 265000000,
        revenue: 50000000,
        marketShare: 20.8,
        rank: 2,
        change: 1,
        trend: "up"
      },
      {
        teamId: "team1",
        teamName: "Team Alpha",
        capital: 250000000,
        revenue: 45000000,
        marketShare: 18.5,
        rank: 3,
        change: -1,
        trend: "down"
      },
      {
        teamId: "team5",
        teamName: "Team Epsilon",
        capital: 235000000,
        revenue: 40000000,
        marketShare: 16.2,
        rank: 4,
        change: 0,
        trend: "stable"
      },
      {
        teamId: "team2",
        teamName: "Team Beta",
        capital: 235000000,
        revenue: 42000000,
        marketShare: 16.8,
        rank: 5,
        change: 0,
        trend: "stable"
      }
    ],
    lastUpdated: new Date(),
    semester: "2024-2"
  }
};

// ============================================
// Achievements 컬렉션 (샘플)
// ============================================
const achievements = {
  "user1": {
    userId: "user1",
    name: "김철수",
    role: "CEO",
    teamId: "team1",
    level: 12,
    totalXP: 850,
    nextLevelXP: 2000,
    badges: [
      { id: "manufacturing_master", name: "제조 마스터", icon: "🏭", unlockedAt: new Date("2024-10-15") },
      { id: "finance_expert", name: "재무 전문가", icon: "💰", unlockedAt: new Date("2024-10-28") },
      { id: "marketing_genius", name: "마케팅 천재", icon: "📢", unlockedAt: new Date("2024-11-05") },
      { id: "hr_specialist", name: "인재 경영자", icon: "👥", unlockedAt: new Date("2024-11-12") },
      { id: "innovator", name: "혁신가", icon: "🚀", unlockedAt: new Date("2024-11-20") }
    ],
    completedChallenges: [
      "weekly_sales_40M",
      "market_share_15",
      "employee_satisfaction_80",
      "profit_margin_20"
    ],
    statistics: {
      decisionsParticipated: 45,
      reportsSubmitted: 8,
      discussionContributions: 23,
      perfectWeeks: 3,
      totalLoginDays: 45
    },
    recentActivities: [
      {
        type: "decision",
        title: "생산계획 수립 완료",
        description: "Q4 생산 목표 설정",
        xpGained: 10,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2시간 전
      },
      {
        type: "challenge",
        title: "도전과제 달성: 매출 40M 돌파",
        description: "주간 매출 목표 달성",
        xpGained: 100,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1일 전
      },
      {
        type: "report",
        title: "주간 보고서 제출",
        description: "Week 5 경영 분석 보고서",
        xpGained: 30,
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3일 전
      }
    ],
    courseId: "MGMT101",
    semester: "2024-2"
  }
};

// ============================================
// Decisions 컬렉션 (샘플)
// ============================================
const decisions = {
  "decision_1": {
    teamId: "team1",
    turn: 5,
    productionPlan: {
      quantity: 10000,
      qualityInvestment: 50000,
      inventory: 2000,
      factoryExpansion: false
    },
    marketingPlan: {
      advertisingBudget: 1000000,
      price: 150,
      promotion: "20% 할인",
      targetSegment: "young_adults"
    },
    financePlan: {
      investment: 500000,
      loan: 0,
      dividend: 0,
      reserveRatio: 15
    },
    hrPlan: {
      hiring: 10,
      layoff: 0,
      training: 30000,
      salary: 3000,
      benefits: "standard"
    },
    rdInvestment: 200000,
    submittedBy: "user1",
    submittedAt: new Date(),
    status: "submitted"
  }
};

// ============================================
// Courses 컬렉션
// ============================================
const courses = {
  "MGMT101": {
    courseId: "MGMT101",
    name: "경영 시뮬레이션",
    code: "MGMT101",
    instructorId: "prof1",
    instructorName: "김교수",
    semester: "2024-2",
    students: [
      "user1", "user2", "user3", "user4", "user5",
      "user6", "user7", "user8", "user9", "user10",
      "user11", "user12", "user13", "user14", "user15",
      "user16", "user17", "user18", "user19", "user20",
      "user21", "user22", "user23", "user24", "user25"
    ],
    teams: ["team1", "team2", "team3", "team4", "team5"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-12-20"),
    settings: {
      turnsPerSemester: 12,
      turnDuration: 7, // 일
      initialCapital: 100000000,
      marketSize: 1000000000
    }
  }
};

// ============================================
// 초기화 함수 (Firebase Admin SDK 사용 시)
// ============================================
/*
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function initializeData() {
  console.log('🚀 Firebase 데이터 초기화 시작...');
  
  // Teams
  console.log('📝 Teams 컬렉션 생성...');
  for (const [id, data] of Object.entries(teams)) {
    await db.collection('teams').doc(id).set(data);
  }
  
  // Game State
  console.log('📝 Game State 컬렉션 생성...');
  for (const [id, data] of Object.entries(gameState)) {
    await db.collection('gameState').doc(id).set(data);
  }
  
  // Leaderboard
  console.log('📝 Leaderboard 컬렉션 생성...');
  for (const [id, data] of Object.entries(leaderboard)) {
    await db.collection('leaderboard').doc(id).set(data);
  }
  
  // Achievements
  console.log('📝 Achievements 컬렉션 생성...');
  for (const [id, data] of Object.entries(achievements)) {
    await db.collection('achievements').doc(id).set(data);
  }
  
  // Decisions
  console.log('📝 Decisions 컬렉션 생성...');
  for (const [id, data] of Object.entries(decisions)) {
    await db.collection('decisions').doc(id).set(data);
  }
  
  // Courses
  console.log('📝 Courses 컬렉션 생성...');
  for (const [id, data] of Object.entries(courses)) {
    await db.collection('courses').doc(id).set(data);
  }
  
  console.log('✅ 데이터 초기화 완료!');
  process.exit(0);
}

initializeData().catch(console.error);
*/

// ============================================
// Firebase Console에서 수동 입력용 JSON
// ============================================
console.log('=== Teams 컬렉션 ===');
console.log(JSON.stringify(teams, null, 2));

console.log('\n=== Game State 컬렉션 ===');
console.log(JSON.stringify(gameState, null, 2));

console.log('\n=== Leaderboard 컬렉션 ===');
console.log(JSON.stringify(leaderboard, null, 2));

console.log('\n=== Achievements 컬렉션 ===');
console.log(JSON.stringify(achievements, null, 2));

console.log('\n=== Decisions 컬렉션 ===');
console.log(JSON.stringify(decisions, null, 2));

console.log('\n=== Courses 컬렉션 ===');
console.log(JSON.stringify(courses, null, 2));
