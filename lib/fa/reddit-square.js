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

var FaRedditSquare = function (_React$Component) {
    _inherits(FaRedditSquare, _React$Component);

    function FaRedditSquare() {
        _classCallCheck(this, FaRedditSquare);

        return _possibleConstructorReturn(this, (FaRedditSquare.__proto__ || Object.getPrototypeOf(FaRedditSquare)).apply(this, arguments));
    }

    _createClass(FaRedditSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24 25.2q0.3 0.3 0 0.6-1.2 1.2-3.9 1.2t-3.8-1.2q-0.3-0.3 0-0.6 0.1-0.1 0.3-0.1t0.3 0.1q0.9 0.9 3.2 0.9t3.3-0.9q0.1-0.1 0.3-0.1t0.3 0.1z m-5.9-3.5q0 0.7-0.5 1.2t-1.2 0.5-1.2-0.5-0.5-1.2q0-0.7 0.5-1.2t1.2-0.5 1.2 0.5 0.5 1.2z m7.5 0q0 0.7-0.5 1.2t-1.2 0.5-1.2-0.5-0.5-1.2q0-0.7 0.5-1.2t1.2-0.5 1.2 0.5 0.5 1.2z m4.8-2.3q0-0.9-0.6-1.6t-1.7-0.7q-0.9 0-1.6 0.7-2.5-1.7-6-1.8l1.3-5.4 3.8 0.9q0 0.7 0.5 1.2t1.2 0.4q0.7 0 1.2-0.5t0.5-1.2-0.5-1.2-1.2-0.5q-1.1 0-1.6 1l-4.2-1q-0.4-0.1-0.4 0.3l-1.4 6q-3.4 0.1-5.9 1.9-0.7-0.8-1.6-0.8-1 0-1.7 0.7t-0.6 1.6q0 0.7 0.3 1.2t0.9 0.9q-0.1 0.6-0.1 1.1 0 2.7 2.7 4.6t6.5 2q3.8 0 6.4-2t2.7-4.6q0-0.6-0.1-1.1 0.5-0.3 0.9-0.9t0.3-1.2z m6.9-10.1v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaRedditSquare;
}(React.Component);

exports.default = FaRedditSquare;
module.exports = exports['default'];