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

var IoCloseCircled = function (_React$Component) {
    _inherits(IoCloseCircled, _React$Component);

    function IoCloseCircled() {
        _classCallCheck(this, IoCloseCircled);

        return _possibleConstructorReturn(this, (IoCloseCircled.__proto__ || Object.getPrototypeOf(IoCloseCircled)).apply(this, arguments));
    }

    _createClass(IoCloseCircled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.6c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m8.4 23.3l-5.8-5.8 5.9-5.9c0.3-0.2 0.3-0.7 0-0.9l-1.7-1.7c-0.2-0.1-0.3-0.2-0.5-0.2s-0.2 0.1-0.4 0.2l-5.9 5.8-5.9-5.8c-0.2-0.1-0.3-0.2-0.4-0.2s-0.3 0.1-0.5 0.2l-1.6 1.7c-0.3 0.2-0.3 0.7 0 0.9l5.9 5.9-5.9 5.9c-0.2 0.1-0.2 0.3-0.2 0.4s0 0.3 0.2 0.5l1.6 1.7c0.2 0.2 0.3 0.2 0.5 0.2s0.3 0 0.4-0.2l5.9-5.9 5.9 5.8c0.2 0.2 0.3 0.3 0.4 0.3s0.3-0.1 0.5-0.3l1.6-1.6c0.2-0.1 0.3-0.3 0.3-0.5s-0.1-0.3-0.3-0.5z' })
                )
            );
        }
    }]);

    return IoCloseCircled;
}(React.Component);

exports.default = IoCloseCircled;
module.exports = exports['default'];