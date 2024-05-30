package kr.co.rland.web.socket.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class ChatWebSocketConfig implements WebSocketConfigurer {

    //우리는 웹 기반인 웹소켓을 사용하기 때문에 os, cpu, 장치에 구애 받지 않는다
    //웹이 크롬이기만 하면 상관없으니까 크로미움
    //주소기반으로 리스닝 하고있긴 하지만 TCP 기반임 -> 연결형 -> 개별 소켓에 대한 포트를 브라우저가 만들어줌
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry
                .addHandler(new ChatWebSocketHandler(),"/chat")
                .setAllowedOriginPatterns("*");
    }
}
