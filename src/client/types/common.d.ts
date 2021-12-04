// This part is copied from type definition files of library oicq.

export declare type Gender = 'male' | 'female' | 'unknown';
export declare type GroupRole = 'owner' | 'admin' | 'member';

/** 可设置的在线状态 */
export declare enum OnlineStatus {
  Online = 11,
  Absent = 31,
  Invisible = 41,
  Busy = 50,
  Qme = 60,
  DontDisturb = 70
}
