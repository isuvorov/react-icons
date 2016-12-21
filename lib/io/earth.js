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

var IoEarth = function (_React$Component) {
    _inherits(IoEarth, _React$Component);

    function IoEarth() {
        _classCallCheck(this, IoEarth);

        return _possibleConstructorReturn(this, (IoEarth.__proto__ || Object.getPrototypeOf(IoEarth)).apply(this, arguments));
    }

    _createClass(IoEarth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.4 9.8c0.1 0.4 0.5 1 0.2 1.2-0.2 0.2-0.8 0.2-1-0.4s0-0.8-0.4-0.7-0.5-0.2-0.5-0.3c0.1-0.1 0.3-0.2 0.4-0.3 0-0.2-0.3-0.6 0.2-0.6 0.3 0.1 0.9 0.8 1.1 1.1z m1.5 3.6z m4.6 2s-0.2 0 0 0z m-14-12.9c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m-6.5 31l0.6 0.3c0.3 0.1 0.5 0.2 0.8 0.3 1.1 0.4 2.2 0.6 3.4 0.7 2.2 0.3 4.4 0.1 6.5-0.6 1.1-0.4 2.3-0.8 3.3-1.5 0.5-0.4 0.5-1.3 0.8-1.9 0.6-1.3-0.1-2.6 0.9-3.7 1-1.1 0.4-1.5 0.4-2.6 0-0.8 0.6-1.5 0.3-2.3-0.1-0.3-0.6 0.2-0.7-0.1-0.4-0.5-1.7-0.1-2.2-0.1-1-0.2-1.9-1.1-2.6-1.8-0.4-0.4 0-1.6 0.1-2.1 0.3-1.1 0-2.6 1.5-2.9 0.4-0.1 0.4-0.7 0.7-0.9 0.4-0.1 0.8-0.2 1.2-0.3 0.7-0.1 1.3 0.1 2 0.1 0.8 0 1.1 0.4 1.8 0.9 0.5 0.5 1 0.2 1.7 0.4 0.5 0 0-0.4-0.2-0.6-0.2-0.2-0.4-0.2-0.6-0.2-1.2-0.3-1.8-1.7-2.8-2.3-0.5-0.3-0.7-0.2-0.9 0 0 0 0.1 0.9 0.1 0.9-0.1 0.2-0.8 0.3-1 0.4-0.7 0.1-2.3-1.3-1.2-1.7 0.3-0.1 2.1-0.4 1.9-1.2-0.2-0.5 0.2-1-0.4-1.1-0.6-0.1-0.5-0.5-1.2-0.6-0.4-0.1-0.4-0.9-0.4-1.1 0-0.7 0.2-0.5 0.7-0.6-1.3-0.8-2.8-1.4-4.4-1.8-0.1 0.2-0.4 0.9-0.6 0.9-0.4 0.1-0.5 0-0.7 0.2-0.7 0.8-1.3 2.2-2 0.6-0.3-0.9 0.4-1.5 0.2-2.2h-0.7c0.4 0.9-0.4 1.4-0.7 1.5-0.6 0-0.7-0.4-1.3-0.3-0.3 0-0.5-0.3-0.8-0.2s-1.1 0.6-1.1 0.9c-0.3 1 0.4 1.1 1.1 0.5 0.4-0.5 1.3-0.9 1.9-0.5 0.5 0.4 0.4 0.7 0.4 1.1s-0.1 1.4-0.7 1.3c-0.3-0.1-0.6-0.5-0.9-0.2-0.6 0.5-1.4 0.4-2.2 0.7-0.8 0.1-1.3 0.4-2 0.7-0.6 0.2-0.8 0.3-0.9 0.9 0 0.2 0 1.1-0.3 1.2-0.3 0.1-0.6-1.7-1.7-1.6-0.9 0.1-2.3 1-1.9 2.2 0.1 0.4 2.2 0.2 0.8 1.1-0.2 0.1 0.1 1.3 0.1 1.6 0.1 0.6 1 1.4 1.7 0.7 0.4-0.4 0.4-0.4 1-0.1 1.2 0.6 2.6 1.2 3.6 2.1 0.4 0.5 0.7 1.9 1.3 2.2 0.7 0.4 1.5 0.4 2 1.1 0.5 0.5-0.1 1.5-0.6 1.8-0.3 0.1-0.9 1.8-1.3 2.2-0.1 0.3-0.9 0.5-1.2 0.6-0.2 0-0.6 0.7-0.7 0.8-0.6 0.6-0.6 1.1-1.3 1.5-1.4 1-1.8 1.8-1.4 3.5 0.1 0.6 0.3 1 0.8 1.2z m-3.2-2.1l0.2 0.2c0.5 0.4 1.1 0.8 1.8 1.2-1.7-1.6-1.8-3.8-1.7-6.1l0.3-1.9c0-0.2-0.4-0.5-0.4-0.8 0-0.8 0-0.4-0.6-1-0.3-0.3-0.8-0.9-0.9-1.4-0.6-1.2 0.1-2.3 0.8-3.3 0.7-1.1-0.6-1.6-0.8-2.5-0.1-0.5-0.6-0.5-0.5-1 0.1-0.5-0.3-0.3-0.7-0.7-0.9-0.6-0.1-1.5-0.5-2-3.4 5.5-2.8 12.7 1.2 17.5 0.1 0.1 0 0.1 0.1 0.2h0.1c0.2 0.3 0.4 0.6 0.7 0.8s0.5 0.5 0.8 0.7z' })
                )
            );
        }
    }]);

    return IoEarth;
}(React.Component);

exports.default = IoEarth;
module.exports = exports['default'];