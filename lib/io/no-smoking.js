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

var IoNoSmoking = function (_React$Component) {
    _inherits(IoNoSmoking, _React$Component);

    function IoNoSmoking() {
        _classCallCheck(this, IoNoSmoking);

        return _possibleConstructorReturn(this, (IoNoSmoking.__proto__ || Object.getPrototypeOf(IoNoSmoking)).apply(this, arguments));
    }

    _createClass(IoNoSmoking, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.6 23.8v-3.8h1.3v3.8h-1.3z m-19.3 0v-3.8h7l3.7 3.8h-10.7z m19.6-19.1c5.4 3 9.1 8.7 9.1 15.3 0 9.7-7.8 17.5-17.5 17.5-1.9 0-3.7-0.3-5.3-0.9-0.2 0-0.2 0-0.4-0.1-0.9-0.3-1.9-0.7-2.7-1.2h-0.1c-5.4-3-9-8.7-9-15.3 0-9.7 7.8-17.5 17.5-17.5 1.9 0 3.7 0.3 5.3 0.9 0.2 0 0.2 0 0.4 0.1 0.9 0.3 1.9 0.7 2.7 1.2z m-8.4 28.6c2.9 0 5.6-1 7.8-2.5l-18.6-18.6c-1.5 2.2-2.5 4.9-2.5 7.8 0 5.1 2.8 9.5 7.1 11.7 0.4 0.3 1 0.6 1.4 0.7 0.2 0.1 0.3 0.1 0.4 0.2 0.7 0.2 1.5 0.4 2.3 0.5 0.7 0.2 1.4 0.2 2.1 0.2z m10.8-5.6c1.5-2.2 2.5-4.8 2.5-7.7 0-5.2-2.9-9.6-7.1-11.8-0.5-0.2-1-0.5-1.4-0.6-0.2-0.1-0.3-0.1-0.4-0.2-0.7-0.2-1.5-0.4-2.3-0.5-0.7-0.2-1.4-0.2-2.1-0.2-2.9 0-5.5 1-7.7 2.5z m-3.3-4.4l-3.3-3.3h3.3v3.3z m2.5 0.5v-3.8h1.3v3.8h-1.3z m-1.9-7.2c1.3 0.6 1.3 2.2 1.3 2.7v0.1h-1.3v-0.1c0-0.6-0.1-1.3-0.5-1.6-0.3-0.1-1-0.3-3.1-0.3h-0.2c-1 0-1.9 0-2.6-1-0.4-0.6-0.4-1.5-0.1-2.3-0.3 0-0.7 0-1-0.2-1.3-0.5-2-1.6-2-3 0-2.5 2.1-3.4 3-3.4v1.2c0 0-1.8 0.2-1.8 2.2 0 0.9 0.4 1.5 1.3 1.8 0.7 0.3 1.4 0.3 1.4 0.3 0.2 0 0.5 0.1 0.5 0.4s0.2 0.4 0 0.6c-0.3 0.5-0.5 1.4-0.3 1.7 0.3 0.5 0.6 0.5 1.6 0.5h0.2c1.9 0 2.9 0.1 3.6 0.4z m3.2 2.8h-1.3c0-2.2-0.3-3.2-0.5-3.6-0.5-0.8-1.1-1.1-2-1.1h-2.3c-0.3 0-0.4-0.2-0.5-0.3s-0.1-0.5 0-0.6c0 0 0.6-1.5 0.5-2.5-0.1-0.7-0.5-1.4-2.2-1.4v-1.2c1.9 0 3.2 0.8 3.4 2.3 0.2 0.9 0 1.8-0.2 2.4h1.3c1.3 0 2.3 0.7 3 1.8 0.5 0.7 0.8 2.1 0.8 4.2z' })
                )
            );
        }
    }]);

    return IoNoSmoking;
}(React.Component);

exports.default = IoNoSmoking;
module.exports = exports['default'];