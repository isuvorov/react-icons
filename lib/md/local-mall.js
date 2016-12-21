'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalMall = function (_React$Component) {
    _inherits(MdLocalMall, _React$Component);

    function MdLocalMall() {
        _classCallCheck(this, MdLocalMall);

        return _possibleConstructorReturn(this, (MdLocalMall.__proto__ || Object.getPrototypeOf(MdLocalMall)).apply(this, arguments));
    }

    _createClass(MdLocalMall, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 21.6c4.6 0 8.4-3.6 8.4-8.2h-3.4c0 2.7-2.3 5-5 5s-5-2.3-5-5h-3.4c0 4.6 3.8 8.2 8.4 8.2z m0-16.6c-2.7 0-5 2.3-5 5h10c0-2.7-2.3-5-5-5z m11.6 5c1.8 0 3.4 1.6 3.4 3.4v20c0 1.8-1.6 3.2-3.4 3.2h-23.2c-1.8 0-3.4-1.4-3.4-3.2v-20c0-1.8 1.6-3.4 3.4-3.4h3.2c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4h3.2z' })
                )
            );
        }
    }]);

    return MdLocalMall;
}(React.Component);

exports.default = MdLocalMall;
module.exports = exports['default'];