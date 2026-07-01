export interface Certificate {
  id: number;

  title: string;

  issuer: string;

  issueDate: string;

  credentialId?: string;

  credentialUrl?: string;

  image: string;

  featured?: boolean;
}