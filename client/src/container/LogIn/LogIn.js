import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import LogInForm from '../../components/LogInForm/LogInForm';
import WhiteBox from '../../components/WhiteBox/WhiteBox';

export default function LogIn() {
  return(
    <>
      <style>
        {`
          .LogInForm_hr{
            height:1px;
            margin:60px 0 50px 0;
            background:rgba(102,102,102,.2);
          }
          .LogInForm_foot-lnk{
            text-align:center;
          }
          #testtest{
            
          }
        `}
      </style>
      <WhiteBox
        Content={
          <>
            <SectionTitle
              titleOption="section-title text-center mb-7"
              headingOption="title fz-28"
              title="로그인"
              subTitle=""
            />
            <LogInForm />
            <div className="LogInForm_hr"></div>
            <div className="LogInForm_foot-lnk">
              <div className='row'>
                <div className="col" data-aos="fade-up">
                  <a href="#forgot">회원가입</a>
                </div>
                <div className="col" data-aos="fade-up">
                  <a href="/idpw">이메일/비밀번호 찾기</a>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
