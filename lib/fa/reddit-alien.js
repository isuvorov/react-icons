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

var FaRedditAlien = function (_React$Component) {
    _inherits(FaRedditAlien, _React$Component);

    function FaRedditAlien() {
        _classCallCheck(this, FaRedditAlien);

        return _possibleConstructorReturn(this, (FaRedditAlien.__proto__ || Object.getPrototypeOf(FaRedditAlien)).apply(this, arguments));
    }

    _createClass(FaRedditAlien, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 18.9q0 1.3-0.7 2.3t-1.7 1.7q0.2 1 0.2 2.1 0 3.5-2.3 6.4t-6.5 4.7-9 1.7-8.9-1.7-6.4-4.7-2.4-6.4q0-1.1 0.2-2.1-1.1-0.6-1.8-1.6t-0.7-2.4q0-1.8 1.3-3.2t3.1-1.3q1.9 0 3.3 1.4 4.8-3.3 11.5-3.6l2.6-11.6q0-0.3 0.3-0.5t0.6-0.1l8.2 1.8q0.4-0.8 1.2-1.3t1.8-0.5q1.4 0 2.4 1t0.9 2.3-0.9 2.4-2.4 1-2.4-1-0.9-2.4l-7.5-1.6-2.3 10.5q6.7 0.2 11.6 3.6 1.3-1.4 3.2-1.4 1.8 0 3.1 1.3t1.3 3.2z m-30.7 4.4q0 1.4 1 2.4t2.4 1 2.3-1 1-2.4-1-2.3-2.3-1q-1.4 0-2.4 1t-1 2.3z m18.1 8q0.3-0.3 0.3-0.6t-0.3-0.6q-0.2-0.2-0.5-0.2t-0.6 0.2q-0.9 0.9-2.7 1.4t-3.6 0.4-3.6-0.4-2.7-1.4q-0.2-0.2-0.5-0.2t-0.6 0.2q-0.3 0.2-0.3 0.6t0.3 0.6q1 0.9 2.6 1.5t2.8 0.6 2 0.1 2-0.1 2.8-0.6 2.6-1.6z m-0.1-4.6q1.4 0 2.4-1t1-2.4q0-1.3-1-2.3t-2.4-1q-1.3 0-2.3 1t-1 2.3 1 2.4 2.3 1z' })
                )
            );
        }
    }]);

    return FaRedditAlien;
}(React.Component);

exports.default = FaRedditAlien;
module.exports = exports['default'];