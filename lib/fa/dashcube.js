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

var FaDashcube = function (_React$Component) {
    _inherits(FaDashcube, _React$Component);

    function FaDashcube() {
        _classCallCheck(this, FaDashcube);

        return _possibleConstructorReturn(this, (FaDashcube.__proto__ || Object.getPrototypeOf(FaDashcube)).apply(this, arguments));
    }

    _createClass(FaDashcube, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.5 15.2q0-2.9 2-5.1t5-2.1h16.6l7.8-8v32.8q0 3-2 5.1t-5 2.1h-17.4q-2.9 0-5-2.1t-2-5.1v-17.6z m27.5 16.8l-3.9-4v-9.5q0-1-0.7-1.8t-1.8-0.7h-10.8q-1 0-1.7 0.7t-0.7 1.8v11q0 1 0.7 1.8t1.7 0.7h17.2z' })
                )
            );
        }
    }]);

    return FaDashcube;
}(React.Component);

exports.default = FaDashcube;
module.exports = exports['default'];