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

var IoHeartBroken = function (_React$Component) {
    _inherits(IoHeartBroken, _React$Component);

    function IoHeartBroken() {
        _classCallCheck(this, IoHeartBroken);

        return _possibleConstructorReturn(this, (IoHeartBroken.__proto__ || Object.getPrototypeOf(IoHeartBroken)).apply(this, arguments));
    }

    _createClass(IoHeartBroken, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.6 22.5c0 2.8-0.1 5.5 0.4 8.4 0.1 0.7 0.1 1.5 0.1 2.4l-11.9-12.4c-3.6-3.7-3.6-9.7 0-13.4 3.1-3.2 8-3.4 11.2-0.2-0.1 1.1-0.2 2.4-0.2 3.6-1.4 1.1-3.2 1.6-4.4 3l0.9-0.5c1.3-0.9 1.1-0.7 2.7-1.1 0.2-0.1 0.6-0.3 0.9-0.4 0 0.1-0.1 0.4-0.1 0.4 0.1 1.6 0.8 3.1 1.1 4.7 0 0.4 0.1 0.8 0 1.2-0.7 1.3-0.6 2.9-0.7 4.3z m7.3 1c0.6 1.4 1.8 2.3 3 3.1l-8.1 8.4-1.4-1.4c0-1-0.3-2-0.3-3-0.1-3.7 0.8-7.3 1.6-11.1 0.1 0.1 0.2 0.1 0.3 0.1 2.3 0.5 4 1.9 4.9 3.9z m8.4-16c3.6 3.7 3.6 9.7 0 13.4l-5.3 5.4c-2.2-1.8-3.2-4.2-5-6.3-1-1-2.1-1.8-3.2-2.5-0.3-1-0.7-2-0.9-3-0.2-1 1.1-1.7 1.2-2.5 0.3-0.9 0.3-2 0.3-3l1.5-1.5c3.1-3.3 8.3-3.3 11.4 0z' })
                )
            );
        }
    }]);

    return IoHeartBroken;
}(React.Component);

exports.default = IoHeartBroken;
module.exports = exports['default'];