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

var MdiQualityHigh = function (_React$Component) {
    _inherits(MdiQualityHigh, _React$Component);

    function MdiQualityHigh() {
        _classCallCheck(this, MdiQualityHigh);

        return _possibleConstructorReturn(this, (MdiQualityHigh.__proto__ || Object.getPrototypeOf(MdiQualityHigh)).apply(this, arguments));
    }

    _createClass(MdiQualityHigh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.4994,13.498L 16.4994,13.498L 16.4994,10.498L 14.4994,10.498M 17.9994,13.998C 17.9994,14.55 17.5524,14.998 16.9994,14.998L 16.2494,14.998L 16.2494,16.498L 14.7494,16.498L 14.7494,14.998L 13.9994,14.998C 13.4464,14.998 12.9994,14.55 12.9994,13.998L 12.9994,9.99805C 12.9994,9.44604 13.4464,8.99805 13.9994,8.99805L 16.9994,8.99805C 17.5524,8.99805 17.9994,9.44604 17.9994,9.99805M 10.9994,14.998L 9.4994,14.998L 9.4994,12.998L 7.4994,12.998L 7.4994,14.998L 5.9994,14.998L 5.9994,8.99805L 7.4994,8.99805L 7.4994,11.498L 9.4994,11.498L 9.4994,8.99805L 10.9994,8.99805M 18.9994,3.99805L 4.9994,3.99805C 3.8944,3.99805 2.9994,4.89404 2.9994,5.99805L 2.9994,17.998C 2.9994,19.1021 3.8944,19.998 4.9994,19.998L 18.9994,19.998C 20.1034,19.998 20.9994,19.1021 20.9994,17.998L 20.9994,5.99805C 20.9994,4.89404 20.1034,3.99805 18.9994,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiQualityHigh;
}(React.Component);

exports.default = MdiQualityHigh;
module.exports = exports['default'];