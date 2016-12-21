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

var GoIssueReopened = function (_React$Component) {
    _inherits(GoIssueReopened, _React$Component);

    function GoIssueReopened() {
        _classCallCheck(this, GoIssueReopened);

        return _possibleConstructorReturn(this, (GoIssueReopened.__proto__ || Object.getPrototypeOf(GoIssueReopened)).apply(this, arguments));
    }

    _createClass(GoIssueReopened, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 30c-2.1 1.5-4.7 2.5-7.5 2.5-6.9 0-12.5-5.6-12.5-12.5 0-1.8 0.4-3.5 1.1-5h-3.6v-3.9c-1.5 2.6-2.5 5.6-2.5 8.9 0 9.7 7.8 17.5 17.5 17.5 4.2 0 8-1.5 11-4l1.5 1.5v-7.5h-7.5l2.5 2.5z m-10 0h5v-5h-5v5z m5-20h-5v12.5h5v-12.5z m15 10c0-9.7-7.8-17.5-17.5-17.5-4.2 0-8 1.5-11 4l-1.5-1.5v7.5h7.5l-2.5-2.5c2.1-1.5 4.7-2.5 7.5-2.5 6.9 0 12.5 5.6 12.5 12.5 0 1.8-0.4 3.5-1.1 5h3.6v3.9c1.5-2.6 2.5-5.6 2.5-8.9z' })
                )
            );
        }
    }]);

    return GoIssueReopened;
}(React.Component);

exports.default = GoIssueReopened;
module.exports = exports['default'];