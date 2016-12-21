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

var GoMention = function (_React$Component) {
    _inherits(GoMention, _React$Component);

    function GoMention() {
        _classCallCheck(this, GoMention);

        return _possibleConstructorReturn(this, (GoMention.__proto__ || Object.getPrototypeOf(GoMention)).apply(this, arguments));
    }

    _createClass(GoMention, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 3.9c-8.9-1.1-17 5.2-18.1 14.1s5.3 17 14.2 18.1c2.8 0.4 5.6 0 8.3-1.1 1-0.4 1.4-1.5 1-2.5s-1.5-1.4-2.5-1c-2 0.9-4.2 1.2-6.4 0.9-6.8-0.8-11.7-7.1-10.9-13.9s7.1-11.7 14-10.9c6.8 0.8 11.7 7.1 10.9 13.9-0.2 1.4-0.9 2.2-2.5 2.2-1.6 0-2.5-1.8-2.5-3.2v-4.9c0-1-0.8-1.8-1.8-1.8-0.4 0-0.8 0.1-1.1 0.3-1-0.8-2.2-1.4-3.6-1.5-4.1-0.5-7.9 2.4-8.4 6.5s2.4 7.8 6.5 8.3c2.3 0.3 4.6-0.5 6.2-2 1 1.1 2.3 1.8 3.9 2 3.4 0.4 6.6-2 7-5.4 1.1-8.9-5.3-17-14.2-18.1z m1.8 16.6c-0.3 2-2.2 3.5-4.2 3.2s-3.5-2.1-3.3-4.2c0.3-2 2.2-3.5 4.2-3.2s3.5 2.1 3.3 4.2z' })
                )
            );
        }
    }]);

    return GoMention;
}(React.Component);

exports.default = GoMention;
module.exports = exports['default'];