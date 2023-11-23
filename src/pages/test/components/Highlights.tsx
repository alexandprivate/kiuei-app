import React from 'react';
import { StatusBadge } from '../../../components/statusBadge/StatusBadge';
import { CiTimer } from 'react-icons/ci';
import { TfiWorld } from 'react-icons/tfi';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

export const Highlights = () => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="grid grid-cols-4 items-center gap-x-4 gap-y-6">
        <Wrapper>
          <div className="text-xs text-zinc-400 uppercase">Status</div>
          <div className="">
            <StatusBadge status="passed" />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="text-xs text-zinc-400 uppercase">Created</div>
          <div className="flex items-center gap-2">
            <CiTimer />
            <span>3 months ago</span>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="text-xs text-zinc-400 uppercase">Last Run</div>
          <div className="flex items-center gap-2">
            <CiTimer />
            <span>Yesterday</span>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="text-xs text-zinc-400 uppercase">Url</div>
          <div className="flex gap-1 items-center">
            <TfiWorld />
            <span>alexandprivate.com</span>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="text-xs text-zinc-400 uppercase">Scheduled</div>
          <div className="flex gap-1 items-center">
            <TfiWorld />
            <span>Daily at 11:00 am</span>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="text-xs text-zinc-400 uppercase">Last Update</div>
          <div className="flex gap-1 items-center">
            <TfiWorld />
            <span>3 months ago</span>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
