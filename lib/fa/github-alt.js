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

var FaGithubAlt = function (_React$Component) {
    _inherits(FaGithubAlt, _React$Component);

    function FaGithubAlt() {
        _classCallCheck(this, FaGithubAlt);

        return _possibleConstructorReturn(this, (FaGithubAlt.__proto__ || Object.getPrototypeOf(FaGithubAlt)).apply(this, arguments));
    }

    _createClass(FaGithubAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.8 27.1q0 0.9-0.3 1.9t-1 1.7-1.6 0.7-1.6-0.7-1-1.7-0.2-1.9 0.3-1.8 0.9-1.7 1.6-0.7 1.6 0.7 1 1.7 0.3 1.8z m14.3 0q0 0.9-0.3 1.9t-1 1.7-1.6 0.7-1.6-0.7-1-1.7-0.2-1.9 0.2-1.8 1-1.7 1.6-0.7 1.6 0.7 1 1.7 0.3 1.8z m3.5 0q0-2.6-1.5-4.5t-4.2-1.9q-0.9 0-4.3 0.5-1.6 0.2-3.5 0.2t-3.5-0.2q-3.4-0.5-4.4-0.5-2.6 0-4.2 1.9t-1.5 4.5q0 2 0.7 3.5t1.8 2.3 2.7 1.3 3.2 0.7 3.3 0.1h3.7q1.9 0 3.4-0.1t3.1-0.7 2.7-1.3 1.8-2.3 0.7-3.5z m5-3.9q0 4.6-1.3 7.4-0.9 1.7-2.4 3t-3.1 1.9-3.8 1.1-3.8 0.4-3.8 0.1q-1.7 0-3.1 0t-3.3-0.3-3.4-0.7-3.1-1.1-2.7-1.8-1.9-2.6q-1.4-2.7-1.4-7.4 0-5.3 3-8.8-0.6-1.9-0.6-3.8 0-2.6 1.2-4.9 2.4 0 4.2 0.9t4.2 2.8q3.3-0.8 6.9-0.8 3.3 0 6.3 0.7 2.3-1.8 4.2-2.7t4.2-0.9q1.1 2.3 1.1 4.9 0 1.9-0.6 3.7 3 3.6 3 8.9z' })
                )
            );
        }
    }]);

    return FaGithubAlt;
}(React.Component);

exports.default = FaGithubAlt;
module.exports = exports['default'];