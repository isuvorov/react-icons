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

var MdiClosedCaption = function (_React$Component) {
    _inherits(MdiClosedCaption, _React$Component);

    function MdiClosedCaption() {
        _classCallCheck(this, MdiClosedCaption);

        return _possibleConstructorReturn(this, (MdiClosedCaption.__proto__ || Object.getPrototypeOf(MdiClosedCaption)).apply(this, arguments));
    }

    _createClass(MdiClosedCaption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,10.998L 16.4994,10.998L 16.4994,10.498L 14.4994,10.498L 14.4994,13.498L 16.4994,13.498L 16.4994,12.998L 17.9994,12.998L 17.9994,13.998C 17.9994,14.55 17.5524,14.998 16.9994,14.998L 13.9994,14.998C 13.4464,14.998 12.9994,14.55 12.9994,13.998L 12.9994,9.99805C 12.9994,9.44604 13.4464,8.99805 13.9994,8.99805L 16.9994,8.99805C 17.5524,8.99805 17.9994,9.44604 17.9994,9.99805M 10.9994,10.998L 9.49938,10.998L 9.49938,10.498L 7.49938,10.498L 7.49938,13.498L 9.49938,13.498L 9.49938,12.998L 10.9994,12.998L 10.9994,13.998C 10.9994,14.55 10.5524,14.998 9.99938,14.998L 6.99938,14.998C 6.44638,14.998 5.99938,14.55 5.99938,13.998L 5.99938,9.99805C 5.99938,9.44604 6.44638,8.99805 6.99938,8.99805L 9.99938,8.99805C 10.5524,8.99805 10.9994,9.44604 10.9994,9.99805M 18.9994,3.99805L 4.99938,3.99805C 3.89438,3.99805 2.99938,4.89404 2.99938,5.99805L 2.99938,17.998C 2.99938,19.1021 3.89438,19.998 4.99938,19.998L 18.9994,19.998C 20.1029,19.998 20.9994,19.1021 20.9994,17.998L 20.9994,5.99805C 20.9994,4.89404 20.1029,3.99805 18.9994,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiClosedCaption;
}(React.Component);

exports.default = MdiClosedCaption;
module.exports = exports['default'];