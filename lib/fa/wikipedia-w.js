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

var FaWikipediaW = function (_React$Component) {
    _inherits(FaWikipediaW, _React$Component);

    function FaWikipediaW() {
        _classCallCheck(this, FaWikipediaW);

        return _possibleConstructorReturn(this, (FaWikipediaW.__proto__ || Object.getPrototypeOf(FaWikipediaW)).apply(this, arguments));
    }

    _createClass(FaWikipediaW, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.2 33l-5.2-12.2q-0.4 0.9-2.8 5.4t-3.5 6.8q0 0-0.4 0t-0.5 0q-1.4-3.4-4.5-10.3t-4.5-10.4q-0.4-0.9-1.2-1.9t-1.8-1.8-1.8-0.7q0-0.1 0-0.4t0-0.5h10.2v0.9q-0.7 0-1.4 0.2t-1.1 0.8-0.2 1.1q0.4 1.1 3.8 8.8t4.1 9.4q0.5-1.1 2.4-4.7t2.3-4.3q-0.3-0.7-2.2-4.9t-2.4-5.2q-0.6-1.2-3.5-1.2v-0.9l9 0v0.8q-1 0.1-1.6 0.5t-0.2 1.2q0.5 1.2 1.5 3.3t1.5 3.3q1.9-3.8 3-6.4 0.4-0.9-0.2-1.4t-2.2-0.4q0-0.1 0-0.5v-0.4q1.1 0 3 0t3.1 0 1.7 0v0.8q-1.1 0.1-2.1 0.6t-1.6 1.4l-3.7 7.8q0.2 0.6 2.2 5.1t2.1 4.8l7.7-17.8q-0.2-0.7-0.8-1.1t-1.2-0.6-0.9-0.1v-0.9l8 0.1 0 0 0 0.8q-2.4 0-3.5 2.5-9.2 21.3-9.8 22.6h-0.8z' })
                )
            );
        }
    }]);

    return FaWikipediaW;
}(React.Component);

exports.default = FaWikipediaW;
module.exports = exports['default'];