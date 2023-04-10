
let teamblack = {
    "ele_name": ["B_pawn1", "B_pawn2", "B_pawn3", "B_pawn4", "B_pawn5", "B_pawn6", "B_pawn7", "B_pawn8", "B_rook1", "B_rook2", "B_knight1", "B_knight2", "B_bishop1", "B_bishop2", "B_queen", "B_king"],
    "ele_pos": ["21", "22", "23", "24", "25", "26", "27", "28", "11", "18", "12", "17", "13", "16", "14", "15"],

}
let teamwhite = {
    "ele_name": ["W_pawn1", "W_pawn2", "W_pawn3", "W_pawn4", "W_pawn5", "W_pawn6", "W_pawn7", "W_pawn8", "W_rook1", "W_rook2", "W_knight1", "W_knight2", "W_bishop1", "W_bishop2", "W_queen", "W_king"],
    "ele_pos": ["71", "72", "73", "74", "75", "76", "77", "78", "81", "88", "82", "87", "83", "86", "84", "85"],

}
let win = false;
let team = "white";
let selected;
let selected_ele;
let new_val;
let clicked_block_new_id;
let old_id;
let team_black_block_status = [[], []];
let team_white_block_status = [[], []];
let path = [];
let aposit_team = [];
let all_range = [];
let apo_team = "black";
let black_loop = 0;
let white_loop = 0;
let team_black_target = () => {

    for (let i = 0; i <= team_black_block_status[1].length - 1; i++) {

        let idx = document.getElementById(team_black_block_status[0][i]).innerText;
        if (team_black_block_status[1][i] == "friend") {
            document.getElementById(team_black_block_status[0][i].toString()).style.pointerEvents = "all";
        }
        else if (team_black_block_status[1][i] == "foi") {
            document.getElementById(team_black_block_status[0][i].toString()).style.pointerEvents = "none";
        }
        else {
            document.getElementById(team_black_block_status[0][i].toString()).style.pointerEvents = "all";
        }
    }


}


let team_white_target = () => {

    for (let i = 0; i <= team_white_block_status[1].length - 1; i++) {

        let idx = document.getElementById(team_white_block_status[0][i]).innerText;
        if (team_white_block_status[1][i] == "friend") {

            document.getElementById(team_white_block_status[0][i].toString()).style.pointerEvents = "all";
        }
        else if (team_white_block_status[1][i] == "foi") {
            document.getElementById(team_white_block_status[0][i].toString()).style.pointerEvents = "none";
        }
        else {
            document.getElementById(team_white_block_status[0][i].toString()).style.pointerEvents = "all";
        }
    }

}



let friend_or_foi_for_white = () => {
    team_white_block_status = [[], []];
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let cata = document.getElementById(i.toString() + j.toString()).innerText;
            team_white_block_status[0].push(i.toString() + j.toString());
            for (let k = 0; k <= 15; k++) {
                if ((cata == teamwhite.ele_name[k])) {
                    team_white_block_status[1].push("friend");
                }
                if (cata == teamblack.ele_name[k]) {
                    team_white_block_status[1].push("foi");
                }

            }

            if (cata == "") {
                team_white_block_status[1].push("free");
            }

        }
    }
    team_white_target();

}




let friend_or_foi_for_black = () => {
    team_black_block_status = [[], []];
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let cata = document.getElementById(i.toString() + j.toString()).innerText;
            team_black_block_status[0].push(i.toString() + j.toString());
            for (let k = 0; k <= 15; k++) {
                if ((cata == teamblack.ele_name[k])) {
                    team_black_block_status[1].push("friend");
                }
                if (cata == teamwhite.ele_name[k]) {
                    team_black_block_status[1].push("foi");
                }

            }

            if (cata == "") {
                team_black_block_status[1].push("free");
            }

        }
    }
    team_black_target();

}

let start_team = () => {

    for (let i = 0; i < teamblack.ele_name.length; i++) {

        document.getElementById(teamblack.ele_pos[i]).innerText = teamblack.ele_name[i];
        document.getElementById(teamwhite.ele_pos[i]).innerText = teamwhite.ele_name[i];

    }



    friend_or_foi_for_black();
    friend_or_foi_for_white();
}


start_team();


let temp_freez = (b_w) => {
    if (b_w == "black") {
        friend_or_foi_for_black();
        for (let i = 0; i <= team_black_block_status[1].length - 1; i++) {

            if (team_black_block_status[1][i] == "foi") {
                document.getElementById(team_black_block_status[0][i]).style.pointerEvents = "none";
            }
            else if (team_black_block_status[1][i] == "friend") {
                document.getElementById(team_black_block_status[0][i]).style.pointerEvents = "all";
            }
            else {
                document.getElementById(team_black_block_status[0][i]).style.pointerEvents = "all";
            }
        }

        // console.log(team_black_block_status[1]);
    }
    else {
        friend_or_foi_for_white();
        for (let i = 0; i <= team_white_block_status[1].length - 1; i++) {

            if (team_white_block_status[1][i] == "foi") {
                document.getElementById(team_white_block_status[0][i]).style.pointerEvents = "none";
            }
            else if (team_white_block_status[1][i] == "friend") {
                document.getElementById(team_white_block_status[0][i]).style.pointerEvents = "all";
            }
            else {
                document.getElementById(team_white_block_status[0][i]).style.pointerEvents = "all";
            }
        }

    }
}


let start_the_game = (team) => {
    if (team == "black") {
        temp_freez("black");

    }
    else {
        temp_freez("white");
    }
}

//if block is


//its checks which block is friend or which is empty and which block is enemy




//-------------------------------logic---------------------------------//



// team_black_target();

// when you click any block this function will activate 
let myturn = (clicked_block_id) => {

    if (win == true) {
        alert("please restart the game");
    }
    else {

        start_the_game(team);
        if (selected_ele == true) {

            selected = document.getElementById(clicked_block_new_id).innerText;
            // show_my_path(selected,clicked_block_id,old_id);
            // alert(old_id);
            run_my_piece(selected, clicked_block_id, clicked_block_new_id, team);
        }
        else {
            selected = document.getElementById(clicked_block_id).innerText;
            // alert(selected);
            clicked_block_new_id = clicked_block_id;
            which_piece_is_selected(selected, clicked_block_new_id);
        }
    }

}
let which_piece_is_selected = (obb_j, clicked_block_new_id) => {
    let myarr = clicked_block_new_id.split("");
    // old_id = clicked_block_new_id;

    if (obb_j == "B_pawn1" || obb_j == "B_pawn2" || obb_j == "B_pawn3" || obb_j == "B_pawn4" || obb_j == "B_pawn5" || obb_j == "B_pawn6" || obb_j == "B_pawn7" || obb_j == "B_pawn8" || obb_j == "W_pawn1" || obb_j == "W_pawn2" || obb_j == "W_pawn3" || obb_j == "W_pawn4" || obb_j == "W_pawn5" || obb_j == "W_pawn6" || obb_j == "W_pawn7" || obb_j == "W_pawn8") {
        pawn(myarr[0], myarr[1]);

    }

    else if (obb_j == "B_rook1" || obb_j == "B_rook2" || obb_j == "W_rook1" || obb_j == "W_rook2") {
        rook(clicked_block_new_id);

    }
    else if (obb_j == "B_bishop1" || obb_j == "B_bishop2" || obb_j == "W_bishop1" || obb_j == "W_bishop2") {
        bishop(clicked_block_new_id);
    }

    else if (obb_j == "B_knight1" || obb_j == "B_knight2" || obb_j == "W_knight1" || obb_j == "W_knight2") {
        knight(clicked_block_new_id);
    }
    else if (obb_j == "B_queen" || obb_j == "W_queen") {
        queen(clicked_block_new_id);
    }
    else if (obb_j == "B_king" || obb_j == "W_king") {
        king(clicked_block_new_id);
    }


}
let eql_or_not = (check_id, m_team, f_or_f) => {
    let local_val = false;
    if (m_team == "black") {
        for (let m = 0; m < 64; m++) {
            if (check_id == team_black_block_status[0][m] && team_black_block_status[1][m] == f_or_f) {
                local_val = true;
                break;
            }

        }

    }

    else {
        for (let m = 0; m < 64; m++) {
            if (check_id == team_white_block_status[0][m] && team_white_block_status[1][m] == f_or_f) {
                local_val = true;
            }

        }


    }
    return local_val;
}


let is_in_there = (s_id, B_or_white) => {
    let val = false;
    let che_ck = document.getElementById(s_id).innerText;

    if (B_or_white == "black") {
        for (let i = 0; i < teamblack.ele_name.length; i++) {
            if (che_ck == teamblack.ele_name[i]) {
                val = true;
            }

        }
        return val;
    }
    else if (B_or_white == "white") {
        for (let i = 0; i < teamwhite.ele_name.length; i++) {
            if (che_ck == teamwhite.ele_name[i]) {
                val = true;
            }

        }
        return val;
    }

}


let run_my_piece = (selected, new_val, old_val, B_or_white) => {

    //if selected block is friend it wont cut it
    if (is_in_there(new_val, B_or_white)) {
        // alert("oo");
        if (team == "black") {
            team = "black";
        } else if (team == "white") {
            team = "white";
        }
        selected_ele = false;
        hide_direction(path);
        myturn(new_val);
    }
    else {
        only_show_my_path(new_val, old_val, selected);

        hide_direction(path);
    }


}
let is_its_my_path = (c_value) => {
    let temp_val = false;
    for (let i = 0; i < path.length; i++) {
        if (path[i] == c_value) {
            temp_val = true;

        }

    }

    return temp_val;
}

let only_show_my_path = (new_val, old_val, selected) => {



    if (is_its_my_path(new_val)) {
        let out_black_arr = ["out_black_1", "out_black_2", "out_black_3", "out_black_4", "out_black_5", "out_black_6", "out_black_7", "out_black_8", "out_black_9", "out_black_10", "out_black_11", "out_black_12", "out_black_13", "out_black_14", "out_black_15", "out_black_16"]
        let out_white_arr = ["out_white_1", "out_white_2", "out_white_3", "out_white_4", "out_white_5", "out_white_6", "out_white_7", "out_white_8", "out_white_9", "out_white_10", "out_white_11", "out_white_12", "out_white_13", "out_white_14", "out_white_15", "out_white_16"]

        let block_name = document.getElementById(new_val).innerText;
        let old_block_name = document.getElementById(old_val).innerText;
        let my_new_img = document.getElementById(new_val).style.backgroundImage;
        let my_img = document.getElementById(old_val).style.backgroundImage;
        if (old_block_name == "B_pawn1" || old_block_name == "B_pawn2" || old_block_name == "B_pawn3" || old_block_name == "B_pawn4" || old_block_name == "B_pawn5" || old_block_name == "B_pawn6" || old_block_name == "B_pawn7" || old_block_name == "B_pawn8" || old_block_name == "W_pawn1" || old_block_name == "W_pawn2" || old_block_name == "W_pawn3" || old_block_name == "W_pawn4" || old_block_name == "W_pawn5" || old_block_name == "W_pawn6" || old_block_name == "W_pawn7" || old_block_name == "W_pawn8") {
            if (new_val == "11" || new_val == "12" || new_val == "13" || new_val == "14" || new_val == "15" || new_val == "16" || new_val == "17" || new_val == "18") {
                alert("pawn changs");
                selected = "W_queen";
                my_img = "url('imgs/W_queen.png')";

            }
            if (new_val == "81" || new_val == "82" || new_val == "83" || new_val == "84" || new_val == "85" || new_val == "86" || new_val == "87" || new_val == "88") {
                alert("pawn changs");
                selected = "B_queen";
                my_img = "url('imgs/B_queen.png')";
            }

        }

        if ((block_name != "") && (block_name != "W_king" || block_name == "B_king")) {
            // alert(block_name + " is out");
            if (team == "black" && black_loop <= 15) {
                document.getElementById(out_black_arr[black_loop]).style.backgroundImage = my_new_img;
                black_loop++;
            }
            else if (team == "white" && white_loop <= 15) {
                document.getElementById(out_white_arr[white_loop]).style.backgroundImage = my_new_img;
                white_loop++;
            }
            else{
                alert("error");
            }
            // console.log(out_black_arr);
        }
        if (block_name == "W_king" || block_name == "B_king") {
            if (block_name == "W_king") {
                alert("game over team black win! ....... ");
                win = true;
            }
            else {
                alert("game over team white win! ....... ");
                win = true;
            }

        }

        document.getElementById(new_val).innerText = selected;
        document.getElementById(old_val).innerText = "";

        let t_p = document.getElementById(new_val);
        t_p.style.backgroundImage = my_img;

        document.getElementById(old_val).style.backgroundImage = "";
        selected_ele = false;

        if (team == "black") {
            document.getElementById("which_team").innerText = "White`s Move..."
            team = "white";

            clicked_block_new_id = "";
            friend_or_foi_for_black();
            friend_or_foi_for_white();
            start_the_game(team);
        }
        else if (team == "white") {
            document.getElementById("which_team").innerText = "Black`s Move..."
            team = "black";
            clicked_block_new_id = "";

            friend_or_foi_for_black();
            friend_or_foi_for_white();
            start_the_game(team);
        }
    }
    else {
        selected_ele = false;
        if (team == "black") {
            team = "black";
            friend_or_foi_for_black();
            friend_or_foi_for_white();
            start_the_game(team);
        } else {
            team = "white";
            friend_or_foi_for_black();
            friend_or_foi_for_white();
            start_the_game(team);
        }
    }



}
let hide_direction = (h_direction) => {

    for (let i = 0; i < h_direction.length; i++) {
        document.getElementById(h_direction[i]).classList.remove("selected");
        document.getElementById(h_direction[i]).classList.remove("kill_selected");
    }

    path = [];

}
let show_direction = (s_direction, m_team) => {

    for (let i = 0; i < s_direction.length; i++) {
        if (!eql_or_not(s_direction[i], m_team, "friend")) {
            document.getElementById(s_direction[i]).classList.add("selected");
        }
        if (eql_or_not(s_direction[i], m_team, "foi")) {
            document.getElementById(s_direction[i]).classList.add("kill_selected");
            document.getElementById(s_direction[i]).style.pointerEvents = "all";
        }
    }
}


let is_id_valid = (selected_id) => {
    let temp_arr = [];
    for (let m = 0; m < selected_id.length; m++) {
        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                let temp_val = i.toString() + j.toString()
                if (selected_id[m] == temp_val) {
                    temp_arr.push(temp_val);
                }
            }

        }
    }

    return temp_arr;
}

// let safe_area_for_king = () => {

// }
let pawn = (c_pos1, c_pos2) => {
    let old_val = c_pos1 + c_pos2;
    let round;
    let side1;
    let side2;
    let b_pawn_cut_sides;

    let new_c_pos1;

    if (team == "black") {
        side1 = (parseInt(c_pos1) + 1).toString() + parseInt(c_pos2 - 1).toString();
        side2 = (parseInt(c_pos1) + 1).toString() + (parseInt(c_pos2) + 1).toString();
        b_pawn_cut_sides = [side1, side2];
    }
    else {
        side1 = (parseInt(c_pos1) - 1).toString() + parseInt(c_pos2 - 1).toString();
        side2 = (parseInt(c_pos1) - 1).toString() + (parseInt(c_pos2) + 1).toString();
        b_pawn_cut_sides = [side1, side2];
    }

    if (old_val == "21" || old_val == "22" || old_val == "23" || old_val == "24" || old_val == "25" || old_val == "26" || old_val == "27" || old_val == "28" || old_val == "71" || old_val == "72" || old_val == "73" || old_val == "74" || old_val == "75" || old_val == "76" || old_val == "77" || old_val == "78") {
        round = 2;
    }
    else {
        round = 1;
    }
    for (let i = 1; i <= round; i++) {
        if (team == "black") {
            new_c_pos1 = parseInt(c_pos1) + i;
        }
        else {
            new_c_pos1 = parseInt(c_pos1) - i;
        }
        new_val = new_c_pos1.toString() + c_pos2.toString();
        if (!eql_or_not(new_val, team, "free")) {
            for (let m = 0; m < b_pawn_cut_sides.length; m++) {
                if (eql_or_not(b_pawn_cut_sides[m], team, "foi")) {
                    path.push(b_pawn_cut_sides[m]);
                    temp_data = true;
                }
            }
            if (temp_data = true) {
                show_direction(path, team);
                selected_ele = true;
                break;

            }
            else {
                path.push(new_val);
                show_direction(path, team);
                selected_ele = true;

                break;

            }

        }
        else {
            for (let m = 0; m < b_pawn_cut_sides.length; m++) {
                if (eql_or_not(b_pawn_cut_sides[m], team, "foi")) {

                    path.push(b_pawn_cut_sides[m]);
                }
            }
            path.push(new_val);

        }


    }
    show_direction(path, team);
    selected_ele = true;


}





let rook = (current_value) => {
    let path_arr = [];
    let path_arr1 = block_top(current_value);
    let path_arr2 = block_bottom(current_value);
    let path_arr3 = block_left(current_value);
    let path_arr4 = block_right(current_value);

    let my_path = path_arr.concat(path_arr1, path_arr2, path_arr3, path_arr4);

    let new_path = is_id_valid(my_path);
    path = new_path;
    show_direction(path, team);
    selected_ele = true;

}

let bishop = (current_value) => {

    let path_arr = [];
    let path_arr1 = block_top_left(current_value);
    let path_arr2 = block_top_right(current_value);
    let path_arr3 = block_bottom_left(current_value);
    let path_arr4 = block_bottom_right(current_value);

    let my_path = path_arr.concat(path_arr1, path_arr2, path_arr3, path_arr4);
    let new_path = is_id_valid(my_path);
    path = new_path;
    show_direction(path, team);
    selected_ele = true;


}


let queen = (current_value) => {


    let path_arr = [];
    let path_arr1 = block_top(current_value);
    let path_arr2 = block_bottom(current_value);
    let path_arr3 = block_left(current_value);
    let path_arr4 = block_right(current_value);

    let path_arr5 = block_top_left(current_value);
    let path_arr6 = block_top_right(current_value);
    let path_arr7 = block_bottom_left(current_value);
    let path_arr8 = block_bottom_right(current_value);

    let my_path = path_arr.concat(path_arr1, path_arr2, path_arr3, path_arr4, path_arr5, path_arr6, path_arr7, path_arr8);
    let new_path = is_id_valid(my_path);
    path = new_path;
    show_direction(path, team);
    selected_ele = true;
}



let knight = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let index = 1; index <= 4; index++) {
        if (index == 1) {
            let a = parseInt(temp_arr[0]) - 2;
            let b = parseInt(temp_arr[1]) + 1;
            let c = parseInt(temp_arr[1]) - 1;
            send_arr.push(a.toString() + b.toString());
            send_arr.push(a.toString() + c.toString());
        }
        else if (index == 2) {
            let a = parseInt(temp_arr[1]) + 2;
            let b = parseInt(temp_arr[0]) + 1;
            let c = parseInt(temp_arr[0]) - 1;
            send_arr.push(b.toString() + a.toString());
            send_arr.push(c.toString() + a.toString());
        }
        else if (index == 3) {
            let a = parseInt(temp_arr[0]) + 2;
            let b = parseInt(temp_arr[1]) + 1;
            let c = parseInt(temp_arr[1]) - 1;
            send_arr.push(a.toString() + b.toString());
            send_arr.push(a.toString() + c.toString());
        }
        else if (index == 4) {
            let a = parseInt(temp_arr[1]) - 2;
            let b = parseInt(temp_arr[0]) + 1;
            let c = parseInt(temp_arr[0]) - 1;
            send_arr.push(b.toString() + a.toString());
            send_arr.push(c.toString() + a.toString());
        }
    }
    let new_path = is_id_valid(send_arr);
    path = new_path;
    show_direction(path, team);
    selected_ele = true;
}

let king = (current_value) => {

    let temp_arr = current_value.split("");
    let send_arr = [];
    let a = parseInt(temp_arr[0]);
    let b = parseInt(temp_arr[1]);
    send_arr.push((a - 1).toString() + (b - 1).toString());
    send_arr.push((a - 1).toString() + b.toString());
    send_arr.push((a - 1).toString() + (b + 1).toString());
    send_arr.push(a.toString() + (b - 1).toString());
    send_arr.push(a.toString() + (b + 1).toString());

    send_arr.push((a + 1).toString() + (b - 1).toString());
    send_arr.push((a + 1).toString() + b.toString());
    send_arr.push((a + 1).toString() + (b + 1).toString());

    let new_path = is_id_valid(send_arr);
    path = new_path;
    show_direction(path, team);
    selected_ele = true;

}

let block_top = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = parseInt(temp_arr[0]) - m;
        let b = temp_arr[1];
        let c = a.toString() + b.toString();
        if (!eql_or_not(c, team, "free")) {
            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }

            break;
        }

        send_arr.push(c);


    }
    return send_arr;
}


let block_bottom = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];
    for (let m = 1; m <= 8; m++) {
        let a = parseInt(temp_arr[0]) + m;
        let b = temp_arr[1];
        let c = a.toString() + b.toString();
        if (!eql_or_not(c, team, "free")) {
            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }
        send_arr.push(c);

    }
    return send_arr;
}


let block_left = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = temp_arr[0];
        let b = parseInt(temp_arr[1]) - m;
        let c = a.toString() + b.toString();
        if (eql_or_not(c, team, "friend")) {
            break;
        }
        if (!eql_or_not(c, team, "free")) {

            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }

        send_arr.push(c);

    }
    return send_arr;
}


let block_right = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = temp_arr[0];
        let b = parseInt(temp_arr[1]) + m;
        let c = a.toString() + b.toString();

        if (!eql_or_not(c, team, "free")) {

            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }
        send_arr.push(c);

    }
    return send_arr;
}


let block_top_left = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = parseInt(temp_arr[0]) - m;
        let b = parseInt(temp_arr[1]) - m;
        let c = a.toString() + b.toString();

        if (!eql_or_not(c, team, "free")) {

            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }
        send_arr.push(c);

    }
    return send_arr;
}

let block_top_right = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = parseInt(temp_arr[0]) - m;
        let b = parseInt(temp_arr[1]) + m;
        let c = a.toString() + b.toString();

        if (!eql_or_not(c, team, "free")) {

            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }
        send_arr.push(c);

    }
    return send_arr;
}


let block_bottom_left = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = parseInt(temp_arr[0]) + m;
        let b = parseInt(temp_arr[1]) - m;
        let c = a.toString() + b.toString();

        if (!eql_or_not(c, team, "free")) {

            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }
        send_arr.push(c);

    }
    return send_arr;
}


let block_bottom_right = (current_value) => {
    let temp_arr = current_value.split("");
    let send_arr = [];

    for (let m = 1; m <= 8; m++) {
        let a = parseInt(temp_arr[0]) + m;
        let b = parseInt(temp_arr[1]) + m;
        let c = a.toString() + b.toString();

        if (!eql_or_not(c, team, "free")) {

            if (eql_or_not(c, team, "foi")) {
                send_arr.push(c);
            }
            break;
        }
        send_arr.push(c);

    }
    return send_arr;
}


let show_all_range = () => {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let val = i.toString() + j.toString();

            let block_name = document.getElementById(val).innerText;
            if (eql_or_not(val, team, "foi")) {
                if (block_name == "B_pawn1" || block_name == "B_pawn2" || block_name == "B_pawn3" || block_name == "B_pawn4" || block_name == "B_pawn5" || block_name == "B_pawn6" || block_name == "B_pawn7" || block_name == "B_pawn8" || block_name == "W_pawn1" || block_name == "W_pawn2" || block_name == "W_pawn3" || block_name == "W_pawn4" || block_name == "W_pawn5" || block_name == "W_pawn6" || block_name == "W_pawn7" || block_name == "W_pawn8") {
                    // pawn(i.toString() ,j.toString() );
                    // hide_direction(path)
                }
            }
        }

    }
    // alert(path);
    path = [];
}
show_all_range()
