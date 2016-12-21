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

var FaCalculator = function (_React$Component) {
    _inherits(FaCalculator, _React$Component);

    function FaCalculator() {
        _classCallCheck(this, FaCalculator);

        return _possibleConstructorReturn(this, (FaCalculator.__proto__ || Object.getPrototypeOf(FaCalculator)).apply(this, arguments));
    }

    _createClass(FaCalculator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.1 34.3q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.8 2-0.8 0.9-2z m8.5 0q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.8 2-0.8 0.8-2z m-8.5-8.6q0-1.2-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m17.1 8.6q0-1.2-0.8-2t-2-0.9-2.1 0.9-0.8 2 0.8 2 2.1 0.8 2-0.8 0.8-2z m-8.6-8.6q0-1.2-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m-8.5-8.6q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2.1 2 0.8 2-0.8 0.9-2.1z m17.1 8.6q0-1.2-0.8-2t-2-0.8-2.1 0.8-0.8 2 0.8 2 2.1 0.9 2-0.9 0.8-2z m-8.6-8.6q0-1.1-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2.1 2 0.8 2-0.8 0.8-2.1z m17.2 17.2v-8.6q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2v8.6q0 1.1 0.8 2t2 0.8 2-0.8 0.9-2z m-8.6-17.2q0-1.1-0.8-2t-2-0.8-2.1 0.8-0.8 2 0.8 2.1 2.1 0.8 2-0.8 0.8-2.1z m8.6-7.1v-5.7q0-0.6-0.4-1t-1-0.4h-28.6q-0.6 0-1 0.4t-0.4 1v5.7q0 0.6 0.4 1t1 0.4h28.6q0.5 0 1-0.4t0.4-1z m0 7.1q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2.1 2 0.8 2-0.8 0.9-2.1z m2.8-14.2v34.2q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.8t-0.8-2.1v-34.2q0-1.2 0.8-2.1t2.1-0.8h31.4q1.1 0 2 0.8t0.8 2.1z' })
                )
            );
        }
    }]);

    return FaCalculator;
}(React.Component);

exports.default = FaCalculator;
module.exports = exports['default'];