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

var FaSlideshare = function (_React$Component) {
    _inherits(FaSlideshare, _React$Component);

    function FaSlideshare() {
        _classCallCheck(this, FaSlideshare);

        return _possibleConstructorReturn(this, (FaSlideshare.__proto__ || Object.getPrototypeOf(FaSlideshare)).apply(this, arguments));
    }

    _createClass(FaSlideshare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.5 16.5q0 1.9-1.4 3.2t-3.4 1.3-3.4-1.3-1.5-3.2q0-1.9 1.5-3.2t3.4-1.3 3.4 1.3 1.4 3.2z m11.2 0q0 1.9-1.4 3.2t-3.4 1.3q-2 0-3.4-1.3t-1.4-3.2q0-1.9 1.4-3.2t3.4-1.3q2 0 3.4 1.3t1.4 3.2z m5 4v-14.9q0-1.9-0.7-2.7t-2.5-0.8h-24.8q-1.9 0-2.5 0.7t-0.7 2.8v15.1q1 0.5 2 0.9t1.8 0.6 1.8 0.4 1.6 0.2 1.6 0.1 1.3 0 1.2 0 1 0q1.6-0.1 2.2 0.6 0.1 0.1 0.2 0.2 0.6 0.5 1.3 1.1 0.2-2 2.7-1.9 0.1 0 0.8 0t0.9 0 1.1 0.1 1.1-0.1 1.3-0.1 1.3-0.2 1.4-0.3 1.5-0.4 1.5-0.6 1.6-0.8z m3.7-0.1q-2.7 3.4-8.4 5.6 1.9 6.4-0.5 10.4-1.4 2.5-4.1 3.3-2.3 0.7-4-0.3-1.9-1.1-1.8-3.7l-0.1-7.2v-0.1q-0.1 0-0.5-0.1t-0.5-0.1l-0.1 7.5q0.1 2.6-1.8 3.7-1.8 1-4.1 0.3-2.6-0.8-4.1-3.3-2.3-4-0.5-10.4-5.6-2.3-8.3-5.6-0.5-0.8 0-1.4t1.3 0q0.1 0.1 0.2 0.2t0.3 0.2v-15.5q0-1.6 1-2.8t2.6-1.1h28q1.5 0 2.6 1.1t1 2.8v15.5l0.5-0.4q0.9-0.6 1.3 0t0 1.4z' })
                )
            );
        }
    }]);

    return FaSlideshare;
}(React.Component);

exports.default = FaSlideshare;
module.exports = exports['default'];