'use strict';
// Copyright 연도만 자동 업데이트합니다. 문의는 별도 수집 폼 없이 전화로 연결됩니다.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
