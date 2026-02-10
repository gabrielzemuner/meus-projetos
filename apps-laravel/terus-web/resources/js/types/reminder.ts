import { Customer } from './customer';
import { Service } from './service';
import { User } from './user';

export type Reminder = {
  id: number;
  user: User;
  customer: Customer;
  service: Service;
  start_date: string;
  recurrence: 'day' | 'week' | 'month' | 'year';
  message: string;
  next_run_at: string | null; // nullable no banco
  is_active: boolean;
};
