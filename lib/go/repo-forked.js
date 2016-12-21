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

var GoRepoForked = function (_React$Component) {
    _inherits(GoRepoForked, _React$Component);

    function GoRepoForked() {
        _classCallCheck(this, GoRepoForked);

        return _possibleConstructorReturn(this, (GoRepoForked.__proto__ || Object.getPrototypeOf(GoRepoForked)).apply(this, arguments));
    }

    _createClass(GoRepoForked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 5c0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.5 2.5 4.3v4.2l-7.5 8.3-7.5-8.3v-4.2c1.5-0.8 2.5-2.4 2.5-4.3 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.5 2.5 4.3v6.1l10 11v4.3c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3v-4.3l10-11v-6.1c1.5-0.8 2.5-2.4 2.5-4.3z m-25-2.5c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.5 2.4-2.5z m10 34.8c-1.3 0-2.4-1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z m10-34.8c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1.1-2.5 2.4-2.5z' })
                )
            );
        }
    }]);

    return GoRepoForked;
}(React.Component);

exports.default = GoRepoForked;
module.exports = exports['default'];