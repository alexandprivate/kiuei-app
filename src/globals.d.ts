// entities
type Org = {
  id: string;
  name: string;
  contactFullName: string;
  email: string;
  active: boolean;
  plan: number;
  billedUntil: string;
  createdAt: string;
  updatedAt: string;
  tests: Test[];
};

type User = {
  id: string;
  email: string;
  fullName: string;
  active: boolean;
  isInvited: boolean;
  createdAt: string;
  updatedAt: string;
  orgId: string;
};

type Suite = {
  id: string;
  name: string;
  description: string;
  created: string;
  updated: string;
};

type Test = {
  id: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  lastSavedAt: string;
  userId: string;
  orgId: string;
  results: string;
  screenshots: string | null;
  cron: unknown | null;
  commands: TestCommand[];
};

type TestCommand = {
  id: string;
  name: string;
  paramsNames: string;
  key: string;
  line: number;
  params: string;
  createdAt: string;
  updatedAt: string;
  testId: string;
};

type TestRunResultOutput = {
  status: string;
  testId: string;
  errors: { message: string; line: number }[];
};

type TestRunResult = {
  status: string;
  testId: string;
  output: TestRunResultOutput[];
  runAtDate: string;
  commands: string;
  url: string;
};

type CommandProps = {
  line: string;
  name: string;
  params: string[];
  paramsNames: string[];
};

type Command = {
  name: string;
  type: 'assertion' | 'action';
  commands: Record<string, CommandProps>;
};
