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

var FaRssSquare = function (_React$Component) {
    _inherits(FaRssSquare, _React$Component);

    function FaRssSquare() {
        _classCallCheck(this, FaRssSquare);

        return _possibleConstructorReturn(this, (FaRssSquare.__proto__ || Object.getPrototypeOf(FaRssSquare)).apply(this, arguments));
    }

    _createClass(FaRssSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.4 28.6q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.8 2-0.8 0.8-2z m7.9 2.1q-0.3-5.2-4-8.9t-8.8-3.9q-0.3 0-0.6 0.2t-0.2 0.5v2.9q0 0.2 0.2 0.4t0.5 0.3q3.4 0.2 5.9 2.7t2.7 5.9q0 0.2 0.2 0.4t0.5 0.2h2.8q0.3 0 0.6-0.2t0.2-0.5z m8.5 0q-0.1-3.4-1.2-6.6t-3.1-5.9-4.6-4.5-5.8-3.1-6.6-1.3q-0.4 0-0.6 0.2-0.2 0.2-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2q4.6 0.2 8.4 2.5t6.3 6.2 2.5 8.4q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2 0.3-0.2 0.2-0.5z m6.5-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaRssSquare;
}(React.Component);

exports.default = FaRssSquare;
module.exports = exports['default'];