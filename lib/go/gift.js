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

var GoGift = function (_React$Component) {
    _inherits(GoGift, _React$Component);

    function GoGift() {
        _classCallCheck(this, GoGift);

        return _possibleConstructorReturn(this, (GoGift.__proto__ || Object.getPrototypeOf(GoGift)).apply(this, arguments));
    }

    _createClass(GoGift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 37.5h12.5v-12.5h-12.5v12.5z m-15 0h12.5v-12.5h-12.5v12.5z m15-22.8l3.4-0.4c3.3-0.4 6.2-3.3 6.6-6.6 0.4-3.2-2-5.6-5.3-5.2-2.5 0.2-4.9 2.1-5.9 4.5-1.1-2.4-3.5-4.3-6-4.5-3.3-0.4-5.7 2-5.3 5.2 0.4 3.3 3.3 6.2 6.6 6.6 0.8 0.1 2.2 0.3 3.4 0.4 0 0.2 0 0.3 0 0.3h2.5s0-0.1 0-0.3z m4.2-9.2c1.8-0.2 3 1.1 2.8 2.8-0.2 1.8-1.7 3.4-3.5 3.6-1.8 0.2-3.1-1.1-2.9-2.8s1.8-3.4 3.6-3.6z m-10.2 6.4c-1.7-0.2-3.3-1.8-3.5-3.6s1-3 2.8-2.8c1.8 0.2 3.4 1.8 3.6 3.6s-1.1 3-2.9 2.8z m6 3.1v7.5h15v-7.5h-15z m-17.5 7.5h15v-7.5h-15v7.5z' })
                )
            );
        }
    }]);

    return GoGift;
}(React.Component);

exports.default = GoGift;
module.exports = exports['default'];