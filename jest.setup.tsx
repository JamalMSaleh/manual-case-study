// jest.setup.tsx

import React from "react";

// Extend Jest matchers from @testing-library/jest-dom
import "@testing-library/jest-dom";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare global {
  namespace jest {
    interface Expect extends TestingLibraryMatchers<any, any> {}
  }
}

// ✅ Mock Next.js navigation (App Router)
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "",
}));

// ✅ Mock next/image to render a basic <img>
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// ✅ Set NODE_ENV for test environment
process.env.NODE_ENV = "test";
