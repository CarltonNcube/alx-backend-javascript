// Define interfaces MajorCredits and MinorCredits
export interface MajorCredits {
  credits: number;
  brand?: string;
}

export interface MinorCredits {
  credits: number;
  brand: string;
}

// Export a function sumMajorCredits to sum the credits of two subjects with MajorCredits
export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
  return subject1.credits + subject2.credits;
}

// Export a function sumMinorCredits to sum the credits of two subjects with MinorCredits
export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
  return subject1.credits + subject2.credits;
}
