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

var FaGithubSquare = function (_React$Component) {
    _inherits(FaGithubSquare, _React$Component);

    function FaGithubSquare() {
        _classCallCheck(this, FaGithubSquare);

        return _possibleConstructorReturn(this, (FaGithubSquare.__proto__ || Object.getPrototypeOf(FaGithubSquare)).apply(this, arguments));
    }

    _createClass(FaGithubSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.6 26.8q0.1-0.1-0.1-0.3-0.2-0.2-0.3 0-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0.1z m-0.6-0.9q-0.2-0.2-0.3-0.1-0.1 0.1 0 0.3 0.1 0.1 0.3 0.1 0.1-0.1 0-0.3z m-1-0.9q0.1-0.1-0.1-0.2-0.1 0-0.1 0-0.1 0.2 0 0.2 0.2 0.1 0.2 0z m0.5 0.5q0.1 0 0-0.1t0-0.1q-0.2-0.2-0.3-0.1t0.1 0.3q0.1 0.1 0.2 0z m1.9 1.7q0.1-0.2-0.2-0.3-0.2 0-0.3 0.1 0 0.2 0.2 0.3 0.2 0 0.3-0.1z m1 0q0-0.1-0.3-0.1-0.2 0-0.2 0.1t0.2 0.2 0.3-0.2z m0.8-0.1q0-0.2-0.2-0.1t-0.2 0.2q0 0.1 0.2 0.1t0.2-0.2z m14.4-7.1q0-4.7-3.4-8.1t-8.1-3.3-8 3.3-3.4 8.1q0 3.7 2.2 6.7t5.6 4.1q0.4 0.1 0.6-0.1t0.2-0.4q0-1.2 0-2.1-0.1 0-0.4 0t-0.8 0.1-1-0.1-1-0.5-0.7-0.9q-0.5-1.3-1.2-1.6-0.1-0.1-0.1-0.1l-0.2-0.2-0.2-0.2 0.1-0.2 0.5-0.1q0.1 0 0.3 0.1t0.7 0.3 0.7 0.8q0.4 0.7 0.8 1t1 0.3 0.9-0.1 0.6-0.2q0.2-1.1 0.8-1.6-1.1-0.1-1.9-0.4t-1.7-0.8-1.2-1.7-0.5-2.7q0-1.8 1.2-3.1-0.5-1.3 0.1-3 0.5-0.1 1.3 0.2t1.3 0.6l0.6 0.4q1.3-0.4 2.8-0.4t2.9 0.4q0.3-0.2 0.6-0.4t1.3-0.6 1.3-0.2q0.6 1.7 0.1 3 1.1 1.3 1.1 3.1 0 1.3-0.3 2.2t-0.8 1.6-1.2 1-1.3 0.6-1.6 0.2q0.8 0.7 0.8 2.2 0 0.9 0 2t0 1.1q0 0.3 0.2 0.4t0.6 0.1q3.4-1.1 5.6-4.1t2.2-6.7z m5.7-10.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaGithubSquare;
}(React.Component);

exports.default = FaGithubSquare;
module.exports = exports['default'];