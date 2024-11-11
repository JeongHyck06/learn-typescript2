// Logger 인터페이스 정의
interface ILogger {
    log(message: string): void;
}

// ConsoleLogger 클래스는 ILogger 인터페이스를 구현
class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(`ConsoleLogger: ${message}`);
    }
}

// FileLogger 클래스는 ILogger 인터페이스를 구현 (가상의 예)
class FileLogger implements ILogger {
    log(message: string): void {
        console.log(`FileLogger: ${message} (written to file)`);
    }
}

// Greeter 클래스는 ILogger에 의존
class Greeter {
    constructor(private logger: ILogger) {}

    greet(name: string): void {
        this.logger.log(`Hello, ${name}!`);
    }
}

// 의존성을 주입하는 부분
const consoleLogger = new ConsoleLogger();
const greeterWithConsoleLogger = new Greeter(consoleLogger);
greeterWithConsoleLogger.greet('John');

// FileLogger를 주입하여 다른 방식으로 사용 가능
const fileLogger = new FileLogger();
const greeterWithFileLogger = new Greeter(fileLogger);
greeterWithFileLogger.greet('Jane');
