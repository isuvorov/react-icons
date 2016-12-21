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

var IoPower = function (_React$Component) {
    _inherits(IoPower, _React$Component);

    function IoPower() {
        _classCallCheck(this, IoPower);

        return _possibleConstructorReturn(this, (IoPower.__proto__ || Object.getPrototypeOf(IoPower)).apply(this, arguments));
    }

    _createClass(IoPower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 20c-1.4 0-2.5-1.1-2.5-2.5v-12.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v12.5c0 1.4-1.1 2.5-2.5 2.5z m9.6-14.6c4.8 3.1 7.9 8.5 7.9 14.6 0 9.7-7.8 17.5-17.5 17.5s-17.5-7.8-17.5-17.5c0-6.1 3.1-11.5 7.9-14.6 0.4-0.2 0.9-0.4 1.3-0.4 1.4 0 2.5 1.1 2.5 2.5 0 0.5-0.1 0.9-0.4 1.3-0.1 0.3-0.3 0.5-0.5 0.7-0.1 0-0.3 0.1-0.3 0.2-0.7 0.5-1.3 0.9-1.8 1.5-2.4 2.3-3.7 5.4-3.7 8.8s1.3 6.5 3.7 8.8 5.4 3.7 8.8 3.7 6.5-1.3 8.8-3.7 3.7-5.4 3.7-8.8-1.3-6.5-3.7-8.8c-0.5-0.6-1.1-1-1.8-1.5 0-0.1-0.2-0.2-0.3-0.2-0.2-0.2-0.4-0.4-0.5-0.7-0.3-0.4-0.4-0.8-0.4-1.3 0-1.4 1.1-2.5 2.5-2.5 0.4 0 0.9 0.2 1.3 0.4z' })
                )
            );
        }
    }]);

    return IoPower;
}(React.Component);

exports.default = IoPower;
module.exports = exports['default'];