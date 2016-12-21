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

var IoSteam = function (_React$Component) {
    _inherits(IoSteam, _React$Component);

    function IoSteam() {
        _classCallCheck(this, IoSteam);

        return _possibleConstructorReturn(this, (IoSteam.__proto__ || Object.getPrototypeOf(IoSteam)).apply(this, arguments));
    }

    _createClass(IoSteam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 16.3c0 1.5-1.2 2.8-2.9 2.8-1.6 0-2.9-1.2-2.9-2.8 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9z m-2.9-5.4c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4l-5.2 3.8c-0.2 2-1.9 3.6-4 3.6-2 0-3.6-1.4-4-3.2l-15.3-6.1c-0.6 0.4-1.3 0.6-2 0.6-2.2 0-4.1-1.9-4.1-4.1s1.9-4 4.1-4c1.9 0 3.5 1.4 3.9 3.2l15.3 6.1c0.6-0.3 1.3-0.6 2.1-0.6 0.1 0 0.2 0.1 0.4 0.1l3.3-4.9c0-2.9 2.5-5.3 5.5-5.3z m0 1.8c-2 0-3.7 1.5-3.7 3.6s1.7 3.6 3.7 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z m-30.5 0.7c-1.7 0-3 1.3-3 2.9s1.3 3 3 3c0.2 0 0.4 0 0.6-0.1l-1.3-0.5c-1.1-0.5-1.7-1.8-1.2-3s1.9-1.8 3-1.3l1.5 0.5c-0.5-0.9-1.5-1.5-2.6-1.5z m21.3 8.7c-0.2 0-0.5 0.1-0.7 0.1l1.2 0.5c1.3 0.4 1.8 1.8 1.4 3.1s-1.8 1.8-3.1 1.3c-0.4-0.2-1-0.5-1.5-0.6 0.5 0.9 1.5 1.5 2.7 1.5 1.6 0 3-1.3 3-2.9s-1.4-3-3-3z' })
                )
            );
        }
    }]);

    return IoSteam;
}(React.Component);

exports.default = IoSteam;
module.exports = exports['default'];