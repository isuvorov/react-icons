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

var IoHappy = function (_React$Component) {
    _inherits(IoHappy, _React$Component);

    function IoHappy() {
        _classCallCheck(this, IoHappy);

        return _possibleConstructorReturn(this, (IoHappy.__proto__ || Object.getPrototypeOf(IoHappy)).apply(this, arguments));
    }

    _createClass(IoHappy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m-12 17.3c0.3 0.1 0.5 0.2 0.8 0.2 0.4 0 0.9-0.2 1.1-0.5s0.6-0.7 1.4-0.7 1 0.4 1.3 0.7 0.7 0.5 1.1 0.5c0.3 0 0.5-0.1 0.8-0.2 0.6-0.4 0.7-1.2 0.3-1.8-0.8-1-1.9-1.7-3.6-1.7s-2.5 0.7-3.4 1.7c-0.5 0.6-0.4 1.3 0.2 1.8z m22.8 4.5c0.3-0.6 0.1-1.3-0.6-1.6-0.1-0.1-0.3-0.2-0.5-0.2-0.5 0-0.9 0.2-1.1 0.6-1.4 2.8-4.8 4.4-8.6 4.4-3.9 0-7.3-1.6-8.6-4.3-0.2-0.5-0.6-0.7-1.1-0.7-0.1 0-0.4 0-0.5 0.1-0.7 0.3-1 1-0.7 1.6 1.7 3.5 6.1 5.8 10.9 5.8 4.7 0 8.9-2.1 10.8-5.7z m1.2-4.5c0.6-0.4 0.7-1.2 0.3-1.8-0.8-1-1.9-1.7-3.5-1.7s-2.6 0.7-3.5 1.7c-0.5 0.6-0.4 1.3 0.2 1.8 0.3 0.1 0.5 0.2 0.8 0.2 0.4 0 0.9-0.2 1.1-0.5s0.6-0.7 1.4-0.7 1 0.4 1.3 0.7 0.7 0.5 1.1 0.5c0.3 0 0.5-0.1 0.8-0.2z' })
                )
            );
        }
    }]);

    return IoHappy;
}(React.Component);

exports.default = IoHappy;
module.exports = exports['default'];