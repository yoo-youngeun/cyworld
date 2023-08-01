$(function() {
    // 로또
    $("#lotButt").on("click", function() {
        let lotto = [];
    
        //6번처리 - 반복문
        for(let i=0;i<6;i++){
            let num = Math.floor(Math.random() * 45) + 1;
            for(let j in lotto){
                while(num == lotto[j]){
                num = Math.floor(Math.random() * 45) + 1;
                }
            }
            lotto.push(num);
        }
    
        //오름차순으로 숫자 정렬
        lotto.sort(function(a,b){
            return a - b;
        });
    
        
        for (let i in lotto) {
            $(`#lot${i}`).text(lotto[i]);
        }
    })



})

//끝말잇기
function wordCheck() {
    let result = $("#result");
    let wordOutput = $("#wordOutput").text();
    let wordInput = $("#wordInput").val();
    let input = wordInput[0];
    let output = wordOutput[wordOutput.length - 1];

    if (input === output) {
        result.text('정답입니다.');
        $("#wordOutput").text(wordInput);
        $("#wordInput").val("");
    } else {
        result.text( '오답입니다.');
    }
}