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

var IoFireball = function (_React$Component) {
    _inherits(IoFireball, _React$Component);

    function IoFireball() {
        _classCallCheck(this, IoFireball);

        return _possibleConstructorReturn(this, (IoFireball.__proto__ || Object.getPrototypeOf(IoFireball)).apply(this, arguments));
    }

    _createClass(IoFireball, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.7 18.6c1.1 1.9 1.8 4.1 1.8 6.4 0 2.6-0.8 4.9-2 6.9-2.3 3.3-6.1 5.6-10.5 5.6-1.3 0-2.5-0.1-3.6-0.5s-1.9-1.1-2.6-2c-0.8-1.2-1.3-2.2-1.6-4.1-0.5 2 0.1 3.8 0.7 4.7-3.4-2-5.4-5.5-5.4-9.7v-0.4c0.4-6 5.1-8.5 7-11.8 0.7-1 1-2.3 0.8-3.7 0.9 0.7 1.2 2 1.2 3 0 1.3-0.3 2.3-0.3 2.3 0.4-0.6 0.6-1.4 0.8-2.4 0.4-2.7 0.1-6.7-2.9-10.3l-0.1-0.1s0.5 0 1.4 0.2c7.4 1.3 13.2 7.1 14.4 14.6 0.1 0.9 0.2 1.8 0.2 2.7 0 1.2-0.2 2.5-0.4 3.7 0.8-1.8 1-3.4 1.1-4.3v-0.8z' })
                )
            );
        }
    }]);

    return IoFireball;
}(React.Component);

exports.default = IoFireball;
module.exports = exports['default'];