const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const formatMessage = require('format-message');

const process = require('process'); // Node.js의 process 모듈

class Scratch3HelloBlocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'hello',
            name: 'Hello',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: BlockType.REPORTER,
                    text: 'say hello'
                },
                {
                    opcode: 'sayHi',
                    blockType: BlockType.REPORTER,
                    text: 'say hi'
                },
                {
                    opcode: 'sayHelloWithName', // 새로운 블록의 opcode
                    blockType: BlockType.REPORTER, // 값을 반환하는 블록 (REPORTER)
                    text: 'say hello to [NAME]', // 블록의 텍스트, NAME 부분이 입력 필드가 됨
                    arguments: { // 블록에 전달할 파라미터 설정
                        NAME: {
                            type: ArgumentType.STRING, // 문자열 입력 필드
                            defaultValue: 'world' // 기본값 설정
                        }
                    }
                },
                {
                    opcode: 'calculateHypotenuse', // 블록의 고유 식별자
                    blockType: BlockType.REPORTER, // 값을 반환하는 블록 (REPORTER)
                    text: 'calculate hypotenuse with x: [X] y: [Y]', // 블록에 표시될 텍스트
                    arguments: { // 블록에 전달할 파라미터 설정
                        X: {
                            type: ArgumentType.NUMBER, // 숫자 입력 필드
                            defaultValue: 3 // 기본값 설정
                        },
                        Y: {
                            type: ArgumentType.NUMBER, // 숫자 입력 필드
                            defaultValue: 4 // 기본값 설정
                        }
                    }
                },
                {
                    opcode: 'waitOneSecond', // 블록의 고유 식별자
                    blockType: BlockType.COMMAND, // 명령형 블록 (COMMAND)
                    text: 'wait 1 second' // 블록에 표시될 텍스트
                },
                {
                    opcode: 'waitOneSecond', // 블록의 고유 식별자
                    blockType: BlockType.COMMAND, // 명령형 블록 (COMMAND)
                    text: 'wait 1 second' // 블록에 표시될 텍스트
                },

                {
                    opcode: 'getCurrentDirectory', // 블록의 고유 식별자
                    blockType: BlockType.REPORTER, // 값을 반환하는 블록 (REPORTER)
                    text: 'get current directory' // 블록에 표시될 텍스트
                }
            ]
        };
    }
    sayHello(args, util) {
        return 'hello';
    }
    sayHi(args, util) {
        return 'hi~';
    }
    // sayHelloWithName 블록의 기능 구현: 입력받은 이름과 "hello"를 함께 반환
    sayHelloWithName(args, util) {
        return `hello ${args.NAME}`; // 입력받은 이름과 'hello'를 결합하여 반환
    }
    // calculateHypotenuse 블록의 기능 구현: 입력받은 x, y 값을 이용하여 빗변의 길이를 계산
    calculateHypotenuse(args, util) {
        const x = args.X; // x 파라미터 값
        const y = args.Y; // y 파라미터 값
        const hypotenuse = Math.sqrt(x * x + y * y); // 빗변의 길이 계산
        return hypotenuse; // 빗변의 길이 반환
    }
    // waitOneSecond 블록의 기능 구현
    waitOneSecond(args, util) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(); // 1초 대기 후 스크립트를 이어서 실행
            }, 1000); // 1000 밀리초 = 1초
        });
    }
    // getCurrentDirectory 블록의 기능 구현
    getCurrentDirectory(args, util) {
        return process.cwd(); // 현재 작업 디렉토리의 절대 경로를 반환
    }


}

module.exports = Scratch3HelloBlocks;
