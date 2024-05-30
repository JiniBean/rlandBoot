package kr.co.rland.web.socket.config;


import com.google.gson.Gson;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.List;

public class ChatWebSocketHandler extends TextWebSocketHandler{

    List<WSUser> users = new ArrayList<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
//        WSUser user = new WSUser();
//        user.setSession(session);
//        users.add(user); // 브로드 캐스팅 하고싶으면 사용자를 담아주면 됨
//        System.out.println("====================");
//        System.out.println(session.getId());
//        System.out.println("====================");
//        System.out.println(session.getRemoteAddress());
//        System.out.println("====================");
//        System.out.println(session.getExtensions());
//        System.out.println("====================");
//        System.out.println(session.getHandshakeHeaders());
//        System.out.println("====================");
//        System.out.println(session.getLocalAddress());
//        System.out.println("====================");
////        System.out.println("connected from" + session.getRemoteAddress());
////        session.sendMessage(new TextMessage("welcome!"));
    }

//    @Override
//    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
//        String payload = message.getPayload();
//        WSData data = new Gson().fromJson(payload, WSData.class);
//
//        if(data.getType() == 1){
//            WSUser user = new WSUser();
//            user.setSession(session);
//            user.setUsername(data.getUsername());
//            users.add(user);
//        }
//
//        for (WSUser s : users){
//            WSData sendData = new WSData();
//            sendData.setType(2);
//            sendData.setUsername(s.getUsername());
//            sendData.setContent(data.getContent());
//            String msg = new Gson().toJson(sendData);
//            s.getSession().sendMessage(new TextMessage(msg));
//
//        }
//
//    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        WSData data = new Gson().fromJson(message.getPayload(), WSData.class);

        if(data.getType() == 1){
            WSUser user = new WSUser();
            user.setSession(session);
            user.setUsername(data.getUsername());
            users.add(user);

            System.out.println(user);
            return;
        }

        String currentId = session.getId();
//        String username = null;
//
//        for(WSUser user : users){
//            String userId = user.getSession().getId();
//            if(userId.equals(currentId))
//                username = user.getUsername();
//        }
        String username = users.stream()
                .filter(user -> user.getSession().getId().equals(currentId))
                .findFirst()
                .map(WSUser::getUsername)
                .orElse(null);

        for(WSUser user : users){

            WSData sendData = new WSData();
            sendData.setType(2);
            sendData.setUsername(username);
            sendData.setContent(data.getContent());
            String textMessage = new Gson().toJson(sendData);

//            String textMessage = message.getPayload();
            user.getSession().sendMessage(new TextMessage(textMessage));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        users.remove(session);
        System.out.println("closed from" + session.getRemoteAddress());
    }
}
