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

var GoFileSubmodule = function (_React$Component) {
    _inherits(GoFileSubmodule, _React$Component);

    function GoFileSubmodule() {
        _classCallCheck(this, GoFileSubmodule);

        return _possibleConstructorReturn(this, (GoFileSubmodule.__proto__ || Object.getPrototypeOf(GoFileSubmodule)).apply(this, arguments));
    }

    _createClass(GoFileSubmodule, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 20h-7.5c0-1.2-1.2-2.5-2.5-2.5h-5s-2.5 1.3-2.5 2.5v12.5h20v-10s-1.2-2.5-2.5-2.5z m-10 2.5h-5v-1.2s0.6-1.3 1.3-1.3h2.5s1.2 0.6 1.2 1.3v1.2z m10-12.5h-13.7s-1.3-0.7-1.3-1.2v-1.3s-1.2-2.5-2.5-2.5h-12.5s-2.5 1.3-2.5 2.5v25h12.5v-15s1.3-2.5 2.5-2.5h10s2.5 1.3 2.5 2.5h7.5v-5s-1.2-2.5-2.5-2.5z m-17.5 0h-12.5v-1.2s0.6-1.3 1.3-1.3h10s1.2 0.7 1.2 1.3v1.2z' })
                )
            );
        }
    }]);

    return GoFileSubmodule;
}(React.Component);

exports.default = GoFileSubmodule;
module.exports = exports['default'];